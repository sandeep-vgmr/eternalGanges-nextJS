import React from "react";
import Wrapper from "../../atom/wrapper";
import InputLabel from "../../atom/label";
import Select from "../../atom/select";
import Error from "../../atom/errormessage";



const Reactselect = (props) => {

    // console.log("React select c", props)

    // const onBlur = (name, value) => {
    //     props.onBlur(name, value)
    // }

    // const onChange = (e) => {
    //     console.log("props data", data, "PropsNAme", props.name)
    //     if (props.name == "bankDetails") {
    //         props.onChange(data.label, data.value)
    //     }
    // }

    const ChageHandler = (e) => {
        //console.log(e.target.value, 'ChageHandler')
        props.onChange(e.target.name, e.target.value)
    }
    const BlurHandler = (value) => {
        props.onBlur(props.name, props.value)
    }

    return (
        <Wrapper addClass={props.classname}>
            {props.label !== undefined ?
                <InputLabel label={props.label} class={props.lblClass} /> : null}
            <div className="formRe">
                <Select
                    name={props.name}
                    id={props.id}
                    option={props.options}
                    defaultOption={props.defaultOption}
                    value={props.value}
                    onBlur={BlurHandler}
                    onChange={ChageHandler}
                    selectClass={props.class}
                    disabled={props.disabled}
                />
                <Error errorMessage={props.errorMsg} />
            </div>
        </Wrapper>
    );
};

export default Reactselect
