import React from 'react';
import './OurProducts.css';
import safetyDoorLockImage from "../../../../images/digital-safety-door-lock.jpg";
import securityCameraImage from "../../../../images/security-camera.jpg";
import remoteControlCarKeyImage from "../../../../images/remote-control-open-vehicle-door.jpg";
import keylessDoorLockImage from "../../../../images/keyless-door-lock.jpg";

const OurProducts = () => {
    return (
        <div className="products-container row p-2 bg-dark">
            <h3 className="text-golden text-center">Our Products</h3>
            <div className="col-md-3">
                <div className="card h-100 product-card">
                    <img src={safetyDoorLockImage} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text text-center">Safety Door Lock</h5>
                    </div>
                    <div className="card-footer product-card-footer" id="review-card-footer">
                        <button className="btn btn-info d-block m-auto ">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100 product-card">
                    <img src={securityCameraImage} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text text-center">High Quality Security Camera</h5>
                    </div>
                    <div className="card-footer product-card-footer" id="review-card-footer">
                        <button className="btn btn-info d-block m-auto ">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100 product-card">
                    <img src={remoteControlCarKeyImage} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text text-center">Remote Control Car Lock Key</h5>
                    </div>
                    <div className="card-footer product-card-footer" id="review-card-footer">
                        <button className="btn btn-info d-block m-auto ">BUY NOW</button>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card h-100 product-card">
                    <img src={keylessDoorLockImage} className="card-img-top img-fluid" alt="..." />
                    <div className="card-body">
                        <h5 className="card-text text-center">Digital Key Less Door Lock</h5>
                    </div>
                    <div className="card-footer product-card-footer" id="review-card-footer">
                        <button className="btn btn-info d-block m-auto ">BUY NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurProducts;