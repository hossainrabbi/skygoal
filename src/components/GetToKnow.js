import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { getToKnow } from '../data/getToKnow.data';
import CountUpContent from './CountUpContent';

const GetToKnow = () => {
    return (
        <section className="my-5">
            <Container>
                <h2 className="text-center mb-5">Get to know US</h2>
                <Row className="justify-content-center">
                    {getToKnow.map((data) => (
                        <Col md={3} key={data.id}>
                            <CountUpContent {...data} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default GetToKnow;
