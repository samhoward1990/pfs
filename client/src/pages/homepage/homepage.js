import React from 'react'
import { Container, Row, Col, Image, Tabs, Tab } from 'react-bootstrap';

import loveOfLemons from '../../images/love-of-lemons.jpg';

class Homepage extends React.Component {
    render() {
        return (
            <Container className="positioned-container">
                <Row>
                    <Col lg="12">
                        <Tabs defaultActiveKey="discography">
                            <Tab eventKey="discography" title="Discography">
                                <Image src={loveOfLemons} width="200px" height="200px" />
                            </Tab>
                            <Tab eventKey="Events" title="Events">

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Homepage;