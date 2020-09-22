import React from 'react';
import './Random.css';

export default function (props) {
    let randomNumber = Math.floor(Math.random() * (props.max - props.min) + props.min);
    return (
        <div className='randomValue'>
            <span>Random value between {props.min} and {props.max} => {randomNumber} </span>
        </div>
    )
}
