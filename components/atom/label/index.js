import React from 'react';

const InputLabel = (props) => {
    let label = props.label
    return<label htmlFor={props.for} className={`input_label ${props.class}`}
        dangerouslySetInnerHTML={{
            __html: label,
        }}
    ></label>
}

export default InputLabel