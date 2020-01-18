import React from 'react';
import './Input.css';

export const Input = props => {
    return (
        <div className="container">
            <input className="input" type="text" {...props} />
        </div>
    );
};