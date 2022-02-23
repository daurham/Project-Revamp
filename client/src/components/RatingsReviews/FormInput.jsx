import React from 'react';

function FormInput(props) {
  return (
    <div>
      <label>Username</label>
      <input placeholder={props.placeholder}/>
    </div>
  )
}

export default FormInput;