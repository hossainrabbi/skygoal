import React from 'react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';
import Clients from '../components/Clients';
import Services from '../components/Services';
import DeliveryInfo from '../components/DeliveryInfo';
import GetToKnow from '../components/GetToKnow';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <NavBar />
            <Header />
            <Clients />
            <Services />
            <DeliveryInfo />
            <GetToKnow />
            <Footer />
        </>
    );
};

export default Home;
