import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="pt-8 full">
            <div className="footer">
                <div>
                    <h2>Address</h2>
                    <h4>Woman health care </h4>
                    <h6>House:7/A,Dhanmondi-00,Dhaka-1205</h6>
                </div>
                <div>
                    <h2>Branch</h2>
                    <h6>Tangail</h6>
                    <h6>Gazipur</h6>
                    <h6>Mymensing</h6>
                    <h6>Bogra</h6>
                </div>
                <div>
                    <h2>Telephone</h2>
                    <h6>Dhaka: 01700567890</h6>
                    <h6>Tangail: 01700567890</h6>
                    <h6>Gazipur: 01700567890</h6>
                    <h6>Mymensing: 01700567890</h6>
                    <h6>Bogra: 01700567890</h6>
                </div>
            </div>
        </div>
    );
};

export default Footer;