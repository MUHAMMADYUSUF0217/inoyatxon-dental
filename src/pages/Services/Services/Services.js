import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import "./Services.css";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () => {
        fetch('./allservices.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    const hrWidth = {
        width: "6.5em",
        heigth: "7px"
    }
    return (
        <div className="container services">
            <h3 className="mt-5 text-secondary">Eng yaxshi Klinika</h3>
            <hr style={hrWidth} className="mx-auto text-info" />

            <h1 className="header_color fw-bolder">Bizning <span className="span_color">Xizmatlarimiz</span></h1>
            <p className="fw-bold text-secondary fs-sm-6 fs-md-5 mt-4 w-lg-75">Tish Davolash, Implants, Dentistry, Dental Bridges, Toj, Bricket, <br className="d-none d-lg-block" /> Veneers, Tish Oqartirish, Medicine, Medical Instruments, ETC</p>
            <Row xs={1} md={2} lg={4} className="gx-sm-0 gx-md-2 gx-lg-4" >
                {
                    services.map(service => <Service key={service.key} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;