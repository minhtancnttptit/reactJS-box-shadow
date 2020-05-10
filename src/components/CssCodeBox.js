import React from "react";

class CssCodeBox extends React.Component {
    state = {}

    componentWillReceiveProps(props) {
        this.setState(props.detail);
    }

    getResult = () => {
        let {shiftRight, shiftDown, spread, blur, opacity, inset} = this.state;
        let result;
        if (shiftRight === undefined)
            result = `box-shadow: rgba(255, 0, 0, 0) 0px 0px 0px 0px`;
        else
            result = `box-shadow: rgba(255, 0, 0, ${opacity}) ${shiftRight}px ${shiftDown}px ${blur}px ${spread}px`;
        if (inset === true)
            result += ' inset;';
        return result;
    }

    render() {
        return (
            <div className="ui segment">
                <h2>CSS code</h2>
                <label className="Css Code">
                    {this.getResult()}
                </label>
            </div>
        );
    }
}

export default CssCodeBox;
