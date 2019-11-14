import React from 'react';

const Input = ({ id, placeholder, clickHandler }) => (
    <input
        type="text"
        id={id}
        className="form-control"
        placeholder={placeholder}
        onChange={clickHandler}
    />
);

export default Input;