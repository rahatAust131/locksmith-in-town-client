import React from 'react';
import Footer from '../../Footer/Footer';
import OurProcess from '../About/OurProcess/OurProcess';
import OurProducts from '../About/OurProducts/OurProducts';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews';
import WelcomeSection from '../WelcomeSection/WelcomeSection';
import Header from '../Header/Header/Header';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="side-space">
                <WelcomeSection />
                <hr />
                <OurProducts />
                <hr />
                <Services />
                <hr />
                <OurProcess />
                <hr />
                <Reviews />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default Home;