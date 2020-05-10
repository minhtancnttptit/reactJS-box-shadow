import React from "react";
import RangeSlider from "./RangeSlider";

const Generator = (props) => {
    return (
        <div className="ui segment">
            <h2>Box-Shadow CSS Generator</h2>
            <RangeSlider name="shiftRight" min={-50} max={50} onChange={props.onChangeValue} />
            <RangeSlider name="shiftDown" min={-50} max={50} onChange={props.onChangeValue} />
            <RangeSlider name="spread" min={0} max={100} onChange={props.onChangeValue} />
            <RangeSlider name="blur" min={0} max={100} onChange={props.onChangeValue} />
            <RangeSlider name="opacity" min={0} max={100} onChange={props.onChangeValue} />
            <input type="checkbox" onChange={(event) => props.onChangeCheckBox(event.target.checked)} />
            <label> Inset</label>
        </div>
    )
};

export default Generator;
