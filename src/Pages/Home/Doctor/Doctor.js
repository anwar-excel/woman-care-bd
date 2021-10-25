import React from 'react';

const Doctor = ({ doctor }) => {
    const { name, study, img, degree, age } = doctor;
    const serviceStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        paddingTop: '10px',
        borderRadius: '10px',
        margin: '10px'
    }
    return (
        <div>


            <div style={serviceStyle} id="service" className="pb-3 w-100">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>{degree}</h4>
                <h6>{age}</h6>
                <p className="px-3">{study}</p>
            </div>



        </div>
    );
};

export default Doctor;