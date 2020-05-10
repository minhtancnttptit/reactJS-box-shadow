import React from "react";
import Generator from "./Generator";
import CssCodeBox from "./CssCodeBox";
import PreviewBox from "./PreviewBox";

class App extends React.Component {
    state = {
        shiftRight: 0,
        shiftDown: 0,
        spread: 0,
        blur: 0,
        opacity: 0,
        inset: false
    };

    onChangeValue = (name, value) => {
        this.setState({[name]: value});
    }

    onChangeCheckBox = (checked) => {
        this.setState({inset: checked});
    }

    render() {
        return (
            <div className="ui container">
                <Generator onChangeValue={this.onChangeValue} onChangeCheckBox={this.onChangeCheckBox}/>
                <CssCodeBox detail={this.state} />
                <PreviewBox detail={this.state} />
            </div>
        );
    }
}

export default App;
