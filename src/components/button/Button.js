import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <div className={
            `button 
            ${props.fillButton ? 'fill' : ''}`}
            onClick={props.onClick}>
            <h4 className={`value ${props.color ? props.color : ''}`}>{props.value}</h4>
        </div>
    );
}

export default Button;