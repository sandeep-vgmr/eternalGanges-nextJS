import React from 'react';

const Wrapper = (props) => {
  return <div className={`wrapper ${props.addClass}`}>{props.children}</div>
}

export default Wrapper;