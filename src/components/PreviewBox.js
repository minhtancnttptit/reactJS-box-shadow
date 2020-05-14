import React from "react";
import {SketchPicker} from "react-color";

class PreviewBox extends React.Component {
    state = {};

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({'css': nextProps.cssCode});
    }

    render() {
        return (
            <>
                <style jsx="true">
                    {
                        `
                            .abc {
                                box-shadow: ${this.state.css};
                                width: 200px;
                                height: 200px;
                                background: ${this.state.background};
                            }
                        `
                    }
                </style>
                <div className="ui segment">
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 2fr)", gridGap: 20 }}>
                        <div>
                            <h2>Preview</h2>
                            <div className="preview-box abc" />
                        </div>
                        <div>
                            <SketchPicker color="ff0000" onChangeComplete={color => this.setState({'background': color.hex})} />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default PreviewBox;
