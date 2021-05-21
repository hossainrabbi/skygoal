import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Hero from '../images/Hero.png';

const Header = () => {
    return (
        <header className="mb-5">
            <Container>
                <Row className="align-items-center flex-column-reverse flex-md-row">
                    <Col md={6}>
                        <Fade left>
                            <h2>
                                Local <span>Urgent</span> Courier Devivery
                                Services
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eligendi, nesciunt eius
                                necessitatibus repellendus quos reiciendis
                                cumque ex repudiandae.
                            </p>
                            <div>
                                <Button className="custom-btn mb-4">
                                    Book a Devivery
                                </Button>
                            </div>
                            <div className="custom-group-btn">
                                <Button className="parcel-btn">Parcel</Button>
                                <Button className="food-btn">Food</Button>
                            </div>
                        </Fade>
                    </Col>
                    <Col md={6} className="mb-4 mb-md-0">
                        <Fade right>
                            <img src={Hero} alt="Hero" />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;
