import React from 'react';
import './BoxColor.css';

export default function BoxColor(props) {
    let style = {
        'background-color': `rgb(${props.r}, ${props.g}, ${props.b})`
    };

    return (
        <div className='boxColor' style={style}>
            <span>rgb({props.r},{props.g},{props.b})</span>
        </div>
    )
}
