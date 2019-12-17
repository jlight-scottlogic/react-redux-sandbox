import React from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class CategoryDisplayComponent extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.products && this.props.products.map(prod =>
                        <Alert key={prod.id} variant="dark">
                            <Row>
                                <Col xs={11}>
                                    <Row>
                                        <Col xs={12}>
                                            <Alert.Heading>{prod.name}</Alert.Heading>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            {prod.description}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={1}>
                                    <Button variant="light">+</Button>
                                </Col>
                            </Row>
                        </Alert>
                    )
                }
            </div>
        )
    }
}

export default CategoryDisplayComponent;