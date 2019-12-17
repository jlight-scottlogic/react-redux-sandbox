import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class ProductCreateFormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            product: {
                id: null,
                name: '',
                description: ''
            }
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({ product: { ...this.state.product, name: e.target.value } });
    }

    handleDescriptionChange(e) {
        this.setState({ product: { ...this.state.product, description: e.target.value } });
    }

    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="product.name">
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col sm="10">
                        <Form.Control value={this.state.product.name} onChange={this.handleNameChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="product.description">
                    <Form.Label column sm="2">Description</Form.Label>
                    <Col sm="10">
                        <Form.Control value={this.state.product.description} onChange={this.handleDescriptionChange} />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-2 float-right" onClick={(e) => this.props.onSave(this.state.product, e)}>
                    Save product
                </Button>
            </Form>
        )
    }

}