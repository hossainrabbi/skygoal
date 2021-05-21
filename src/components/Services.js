import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { services } from '../data/services.data';
import Service from './Service';

const Services = () => {
    return (
        <section className="services mb-4">
            <Container>
                <Row>
                    {services.map((service) => (
                        <Col lg={3} md={6} className="my-3" key={service.id}>
                            <Service {...service} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
