import React from 'react';
import "./Button.css";

function Input(props) {
    return(
        <button className="componentButton">{props.text}</button>
    );
}

export default Input;