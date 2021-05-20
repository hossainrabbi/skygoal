import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Hero from '../images/Hero.png';

const Header = () => {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={6}>
                    <h2>
                        Local <span>Urgent</span> Courier Devivery Services
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Eligendi, nesciunt eius necessitatibus repellendus
                        quos reiciendis cumque ex repudiandae.
                    </p>
                    <Button className="custom-btn">Book a Devivery</Button>
                </Col>
                <Col md={6}>
                    <img src={Hero} alt="Hero" />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;