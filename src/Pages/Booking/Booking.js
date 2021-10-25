import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Booking = ({ disease }) => {
    // const { name, description, doctor_name, time } = disease;
    const { serviceId } = useParams();
    return (
        <div>
            <h2>This is Booking {serviceId}</h2>
            <h2>This is Booking {serviceId}</h2>
            <h2>This is Booking {serviceId}</h2>
            <h2>This is Booking {serviceId}</h2>
            <h2>This is Booking {serviceId}</h2>
            {/* <h3>{name}</h3>
            <p>{description}</p> */}
            <Link to="/home"><button className="btn btn-warning">Go to Home</button></Link>
        </div>
    );
};

export default Booking;