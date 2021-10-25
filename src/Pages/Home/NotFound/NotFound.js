import React from 'react';
import './NotFound.css'
import images from '../../../images/NotFound/404-error-page-not-found.jpg';
const NotFound = () => {
    return (
        <div>
            <img className="notfound" src={images} alt="" />
        </div>
    );
};

export default NotFound;