import React from 'react';

const InputLabel = (props) => {
    let label = props.label

    const htmlContent = `<b id={props.for}>${props.boldContent}</b>
        <span className='colors' style={{ backgroundColor: ${props.spanColor} }}>
        </span><p>${props.circleColor} <span>${props.qtyContent}</span></p>
        <label htmlFor=${props.for} className={input_label ${props.class}} >${label}</label>`;


    return <div dangerouslySetInnerHTML={{
            __html: htmlContent,
        }}
    ></div>
}

export default InputLabel


