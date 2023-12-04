import React from 'react'
import InputText from '../../atom/inputs'
import InputLabel from '../../atom/label'
import Wrapper from '../../atom/wrapper'

const FormGroup = (props) => {
  return (
    <Wrapper addClass={props.addClass}>
      <InputLabel class={props.lblClass} label={props.label} />
      <InputText
        id={props.id}
        type={props.type}
        name={props.name}
        inputClass={props.inputClass}
        placeholder={props.placeholder}
        value={props.value}
        maxLength={props.maxLength}
        disabled={props.disabled}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </Wrapper>
  )
}

export default FormGroup