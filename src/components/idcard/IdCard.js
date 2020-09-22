import React from 'react';
import './IdCard.css'

export default function IdCard(props) {
    return (
        <div className='idCard'>
            <img src={props.picture} className='profilePicture' alt='id-card'/>
            <div className='idDetails'>
            <span><b>First name</b>: {props.firstName}</span>
            <span><b>Last name</b>: {props.lastName}</span>
            <span><b>Gender</b>: {props.gender}</span>     
            <span><b>Height</b>: {props.height}</span>    
            <span><b>Birth</b>: {props.birth}</span>               
            </div>
        </div>
    )
}
