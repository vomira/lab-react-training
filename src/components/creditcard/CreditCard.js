import React from 'react';
import './CreditCard.css'

export default function CreditCard(props) {
    let style = {
        'background-color': props.bgColor,
        'color': props.color
    };
    let anon = '•••• •••• •••• ';
    let ccNumber = anon.concat(props.number.toString().slice(props.number.length-4));
    let expirationMonth = props.expirationMonth < 10 ? '0' + props.expirationMonth : props.expirationMonth;
    let expirationYear = props.expirationYear.toString().slice(2);
    return (
        <div className='creditCard' style={style}>
            <div className='ccLogo'><span>{props.type}</span></div>
            <div className='ccNumber'>{ccNumber}</div>
            <div className='ccInfo'>
            <div className='ccDate'>Expires {expirationMonth}/{expirationYear} {'    '} {props.bank}</div>
            <br/>
            <div className='ccOwner'>{props.owner}</div>
            </div>
        </div>
    )
}
