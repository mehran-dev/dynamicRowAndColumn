import React from 'react';

const Input = (props) => {
    return (
        <input type="text" placeholder={props.placeholder} {...props} />
    );
};

export default Input;