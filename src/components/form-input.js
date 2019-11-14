import React from 'react';

const FormInput = (props) => (
    <div className="form-group mb-3">
        <label>{props.text}</label>
        {props.children}
    </div>
);

export default FormInput;