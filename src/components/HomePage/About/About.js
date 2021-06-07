import React from 'react';
import './About.css';
import OurProcess from './OurProcess/OurProcess';
import OurProducts from './OurProducts/OurProducts';

const About = () => {
    return (
        <div className="about-container">
            <OurProcess />
            <hr/>
            <OurProducts />
        </div>
    );
};

export default About;