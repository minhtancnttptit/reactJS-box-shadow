import React from "react";

const RangeSlider = (props) => {
    const onChangeSlider = (event) => {
        console.log(event.target.value);
        props.onChange(props.name, event.target.value);
    }

    return (
        <div>
            <div className="label">
                <label>{props.name}</label>
            </div>
            <div className="RangeSlider ">
                <input type="range" className="Slider" id="Slider"  step={1}
                       aria-valuemax={props.max} aria-valuemin={props.min} min={props.min} max={props.max} onInput={onChangeSlider}/>
            </div>
        </div>
    );
}

export default RangeSlider;
