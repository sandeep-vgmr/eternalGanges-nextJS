import React from 'react';

const Select = (props) => {
    return (
        <select
            value={props.value || props.id}
            onChange={props.onChange}
            onBlur={props.onBlur}
            disabled={props.disabled !== undefined ? props.disabled : false}
            placeholder={props.placeholder}
            name={props.name}
            className={`txtbox ${props.selectClass}`}>
            <option value={""}>{props.defaultOption ? props.defaultOption : "Select" }</option>
            {
                props.option?.map((option, id) => {
                    return <option key={id} value={option.value || option.id} data-one={option.value || option.id} data-two={option.label || option.name}>{option.label || option.name}</option>
                })
            }
        </select>
    )

}
export default Select