import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { services } from '../data/services.data';
import Service from './Service';

const Services = () => {
    return (
        <section>
            <Container>
                <Row>
                    {services.map((service) => (
                        <Col md={3} key={service.id}>
                            <Service {...service} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Services;
