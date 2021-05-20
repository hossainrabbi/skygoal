import React from 'react';
import Clients from './components/Clients';
import Header from './components/Header';
import NavBar from './components/NavBar';
import './App.css';

function App() {
    return (
        <>
            <NavBar />
            <Header />
            <Clients />
        </>
    );
}

export default App;
