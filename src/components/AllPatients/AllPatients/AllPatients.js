import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import AppointmentDataTable from '../../Dashboard/AppointmentDataTable/AppointmentDataTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);
   

    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])


    return (
        <div className = "container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5"  style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className= "text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments}/>
            </div>
            
        </div>
    );
};

export default AllPatients;