import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { navbar } from '../data/navbar.data';
import logo from '../images/FastTruck.png';

const NavBar = () => {
    return (
        <Navbar expand="lg" className="nav-bar">
            <Container>
                <Link to="/" className="navbar-brand">
                    <img src={logo} alt="FastTruck" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {navbar.map(({ id, title, url }) => (
                            <Link className="nav-link" to={url} key={id}>
                                {title}
                            </Link>
                        ))}
                        <Button className="custom-btn">Sign In</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
