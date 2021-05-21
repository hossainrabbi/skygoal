import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getToKnow } from '../data/getToKnow.data';
import CountUpContent from './CountUpContent';

const GetToKnow = () => {
    return (
        <section className="mb-4">
            <Container>
                <h2 className="text-center mb-5">Get to know US</h2>
                <Row className="justify-content-center">
                    {getToKnow.map((data) => (
                        <Col lg={3} md={4} key={data.id}>
                            <CountUpContent {...data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default GetToKnow;
