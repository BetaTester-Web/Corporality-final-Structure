import React from 'react';
import "./Input.css";

function Input(props) {
    return(
        <input placeholder={props.placeholder} className="componentInput" required />
    );
}

export default Input;