import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Clients from './components/Clients';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Services from './components/Services';
import DeliveryInfo from './components/DeliveryInfo';

function App() {
    return (
        <Router>
            <NavBar />
            <Header />
            <Clients />
            <Services />
            <DeliveryInfo />
        </Router>
    );
}

export default App;
