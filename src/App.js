import React from 'react';
import Clients from './components/Clients';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './App.css';
import Services from './components/Services';
import DeliveryInfo from './components/DeliveryInfo';

function App() {
    return (
        <>
            <NavBar />
            <Header />
            <Clients />
            <Services />
            <DeliveryInfo />
        </>
    );
}

export default App;
