import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { footer } from '../data/footer.data';
import logo from '../images/FastTruck.png';
import FooterItem from './FooterItem';

const Footer = () => {
    return (
        <footer className="footer py-5">
            <Container>
                <Row>
                    <Col md={3}>
                        <div className="footer-logo">
                            <Link to="/">
                                <img src={logo} alt="FastTruck" />
                            </Link>
                            <p className="mt-3 mb-0">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                            </p>
                        </div>
                    </Col>
                    {footer.map((data) => (
                        <Col md={3} key={data.id}>
                            <FooterItem {...data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
