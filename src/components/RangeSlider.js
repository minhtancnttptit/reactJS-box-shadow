import React from "react";

class RangeSlider extends React.Component {
    state = {value: 0}

    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({value: nextProps.value});
    }

    onChangeSlider = (event) => {
        this.setState({value: event.target.value});
        this.props.onChange(this.props.name, event.target.value);
    }

    render() {
        return (
            <>
                <style jsx={true}>
                    {
                        `
                        .Slider {
                            width: 300px
                        }
                        `
                    }
                </style>
                <div>
                    <div className="label">
                        <label>{this.props.name}</label>
                    </div>
                    <div className="RangeSlider ">
                        <input type="range" className="Slider" id="Slider" step={1}
                               aria-valuemax={this.props.max} aria-valuemin={this.props.min} min={this.props.min}
                               max={this.props.max}  value={this.state.value} onChange={e => this.onChangeSlider(e)}/>
                    </div>
                </div>
            </>

        );
    }
}

export default RangeSlider;
