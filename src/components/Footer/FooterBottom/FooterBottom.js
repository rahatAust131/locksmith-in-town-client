import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
    return (
        <div className="row g-3 footer-bottom d-flex justify-content-center align-items-center">
                <div className="col-md-4">
                    Copyrights &copy; {new Date().getFullYear()} 
                    <br/> All Rights Reserved by Rahat Chowdhury Zisan
                </div>
                <div className="col-md-4">
                    <h2>LOXMITH IN TOWN</h2>
                </div>
                <div className="col-md-4 d-flex flex-column justify-content-center">
                    <Link className="text-link m-0 p-0" to="" >Terms Of Service</Link>
                    <Link className="text-link m-0 p-0" to="" >Career</Link>
                    <Link className="text-link m-0 p-0" to="" >GDPR</Link>
                    <Link className="text-link m-0 p-0" to="" >Privacy Policy</Link>
                </div>
            </div>
    );
};

export default FooterBottom;