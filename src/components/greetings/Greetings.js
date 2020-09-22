import React from 'react';
import './Greetings.css';

export default function Greetings(props) {
    let greeting;
    if(props.lang === 'de') {
        greeting = 'Hallo';
    } else if(props.lang === 'fr') {
        greeting = 'Bonjour';
    } else if(props.lang === 'en') {
        greeting = 'Hello';
    } else if(props.lang === 'es') {
        greeting = 'Buenas';
    }
    return (
        <div className='greeting' lang={props.lang}>
        {greeting} {' '} 
           {props.children}
            
        </div>
    )
}
