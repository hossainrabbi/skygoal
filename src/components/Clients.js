import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { clients } from '../data/clients.data';

const Clients = () => {
    return (
        <section className="my-3">
            <Container>
                <Row className="justify-content-center align-items-center">
                    {clients.map(({ id, image, title }) => (
                        <Col md={2} key={id}>
                            <img src={image} alt={title} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Clients;
