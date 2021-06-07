import './Footer.css';
import React from 'react';
import FooterTop from './FooterTop/FooterTop';
import FooterBottom from './FooterBottom/FooterBottom';

const Footer = () => {
    return (
        <div className="">
            <FooterTop />
            <FooterBottom />
        </div>
    );
};

export default Footer;