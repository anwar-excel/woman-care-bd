import React from 'react';
import { Link } from 'react-router-dom';

const Service = (props) => {
    console.log('Props :', props.disease);
    // const { name, description } = props.dis;
    const { id, name, description, img } = props.disease;
    const serviceStyle = {
        border: '3px solid goldenrod',
        padding: '10px',
        paddingTop: '10px',
        borderRadius: '10px',
        margin: '10px'
    }

    // console.log('From here2:: ', disease);

    return (
        <div style={serviceStyle} id="service" className="pb-3 w-100">

            <img src={img} alt="" />
            <h2>{name}</h2>
            <p className="px-3">{description}</p>
            <Link to={`/booking/${id}`}><button className="btn btn-warning">Book {name}</button></Link>

        </div>
    );
};

export default Service;