import React from 'react';
import Wrapper from '@/components/atom/wrapper';
import Label from '@/components/atom/label';
import Input from '../../atom/inputs';
import CheckboxLabel from '@/components/atom/label/checkboxlabel';


const ReactCheckbox = (props) => {
    const ChageHandler = (e) => {
        //console.log(e.target.value, 'ChageHandler')
        props.onChange(e.target.name, e.target.value)
    }
    const BlurHandler = (value) => {
        props.onBlur(props.name, props.value)
    }

    return (
        <>
            <Input
                type={props.type}
                id={props.id}
                name={props.name}
                inputClass={props.inputClass}
                onChange={ChageHandler}
                onBlur={BlurHandler}
                value={props.value}
                inputAnimation={props.inputAnimation}
                searchIcon={props.searchIcon}
                disabled={props.disabled}
                defaultChecked={props.defaultChecked}
            />
            {/* <CheckboxLabel label={props.label} for={props.for} boldContent={props.boldContent} spanColor={props.spanColor} circleColor={props.circleColor} qtyContent={props.circleColor}></CheckboxLabel> */}

            {props.children}
        </>
    )
}

export default ReactCheckbox;