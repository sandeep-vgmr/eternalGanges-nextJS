import React from 'react';
import Wrapper from '@/components/atom/wrapper';
import Label from '@/components/atom/label';
import Input from '@/components/atom/inputs';
import Error from '@/components/atom/errormessage';

const ReactInput = (props) => {
    const ChageHandler = (e) => {
        //console.log(e.target.value, 'ChageHandler')
        props.onChange(e.target.name, e.target.value)
    }
    const BlurHandler = (value) => {
        props.onBlur(props.name, props.value)
    }

    return (
        <Wrapper>
            <Label htmlFor={props.for} class={props.lblClass} label={props.label}></Label>
            <Input
                type={props.type}
                name={props.name}
                placeholder={props.placeholder}
                inputClass={props.inputClass}
                onChange={ChageHandler}
                onBlur={BlurHandler}
                maxLength={props.maxLength}
                value={props.value}
                inputAnimation={props.inputAnimation}
                searchIcon={props.searchIcon}
                disabled={props.disabled}
            />
            {props.children}
            <Error errorMessage={props.errorMsg} />
        </Wrapper>
    )
}

export default ReactInput;