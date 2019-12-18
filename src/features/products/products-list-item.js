import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ProductsListItemComponent extends React.Component {
    render() {
        return (
            <Alert variant="dark">
                <Row>
                    <Col xs={11}>
                        <Row>
                            <Col xs={12}>
                                <Alert.Heading>{this.props.product.name}</Alert.Heading>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12}>
                                {this.props.product.description}
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={1}>
                        <Button variant="light">+</Button>
                    </Col>
                </Row>
            </Alert>
        );
    }
}