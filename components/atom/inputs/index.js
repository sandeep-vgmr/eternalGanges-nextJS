import React from 'react';

const InputText = (props) => {
  return (
    <input
      id={props.id}
      type={props.type !== undefined ? props.type : "text"}
      name={props.name}
      className={`input_text ${props.inputClass}`}
      placeholder={props.placeholder}
      value={props.value}
      maxLength={props.maxLength}
      disabled={props.disabled || false}
      onChange={props.onChange}
      onBlur={props.onBlur}
      checked={props.defaultChecked}
    />
  )
}

export default InputText
