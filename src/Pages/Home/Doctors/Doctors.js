import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('./doctor.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div>
            <h2>Doctor Details</h2>
            <div id="doctors" className="doctors ">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }

            </div>
        </div>
    );
};

export default Doctors;