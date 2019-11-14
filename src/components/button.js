import React from 'react';

const Button = (props, {style, handleClick}) => (
    <button className={style} onClick={handleClick}>{style + props.children}</button>
);

export default Button;