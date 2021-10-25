import React from 'react';
import { Button } from 'react-bootstrap';
import './Contact.css'


const ContactUs = () => {
    return (

        <div >
            <h2 className="h2">Contact With Us</h2>
            <input className="input" type="text" name="" id="" placeholder="Enter your name" />
            <br />
            <input className="input" type="email" name="" id="" placeholder="Example abc@gmail.com" />
            <br />
            <input className="input" type="number" name="" id="" placeholder="Example +08817000000000" />
            <br />
            <input className="input" type="password" name="" id="" placeholder="Enter your password" />
            <br />
            <br />
            <Button className="btn btn-primary"> Submit</Button>
        </div>

    );
};

export default ContactUs;