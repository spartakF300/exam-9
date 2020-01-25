import React from 'react';
import './Contact.css'
const Contact = (props) => {
    return (
        <div onClick={props.show} className="wrap-card">
            <img  className="img" src={props.url} alt=""/>
           <span>{props.name +' '+ props.lastName}</span>
        </div>
    );
};

export default Contact;