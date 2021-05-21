import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import discover from '../images/discover.png';
import deliveryReceive from '../images/deliveryReceive.png';

const DeliveryInfo = () => {
    return (
        <section className="mb-5">
            <Container>
                <Row className="align-items-center mb-md-5">
                    <Col md={6} className="mb-5 mb-md-0">
                        <Fade left>
                            <img src={discover} alt="Discover" />
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade right>
                            <h2>
                                Find Favorites and Discover New OnesFrom our App
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eligendi, nesciunt eius
                                necessitatibus repellendus quos reiciendis
                                cumque ex repudiandae.
                            </p>
                        </Fade>
                    </Col>
                </Row>
                <Row className="align-items-center flex-column-reverse flex-md-row">
                    <Col md={6}>
                        <Fade left>
                            <h2>
                                When you order your food, it will arrive at your
                                door in time.
                            </h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Eligendi, nesciunt eius
                                necessitatibus repellendus quos reiciendis
                                cumque ex repudiandae.
                            </p>
                        </Fade>
                    </Col>
                    <Col md={6}>
                        <Fade right>
                            <img src={deliveryReceive} alt="Delivery Receive" />
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default DeliveryInfo;
