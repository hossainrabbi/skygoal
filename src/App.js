import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Clients from './components/Clients';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Services from './components/Services';
import DeliveryInfo from './components/DeliveryInfo';
import GetToKnow from './components/GetToKnow';

function App() {
    return (
        <Router>
            <NavBar />
            <Header />
            <Clients />
            <Services />
            <DeliveryInfo />
            <GetToKnow />
        </Router>
    );
}

export default App;
