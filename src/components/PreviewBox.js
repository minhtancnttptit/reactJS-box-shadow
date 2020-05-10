import React from "react";

class PreviewBox extends React.Component {
    state = {}

    componentWillReceiveProps(props) {
        this.setState(this.props.detail);
    }

    getStyle = () => {
        let {shiftRight, shiftDown, spread, blur, opacity, inset} = this.state;
        let result;
        if (shiftRight === undefined)
            result = `rgba(255, 0, 0, 0) 0px 0px 0px 0px`;
        else
            result = `rgba(255, 0, 0, ${opacity}) ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px`;
        if (inset === true)
            result += ' inset';
        return {
            width: 200,
            height: 200,
            boxShadow: result
        }
    }


    render() {
        return (
            <div className="ui segment">
                <h2>Preview</h2>
                <div className="preview-box" style={this.getStyle()}/>
            </div>
        );
    }
}

export default PreviewBox;
