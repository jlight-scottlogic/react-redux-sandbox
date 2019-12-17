import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class CategoryEditFormComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: this.props.category
        }
        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    }

    handleNameChange(e) {
        this.setState({ category: { ...this.state.category, name: e.target.value } });
    }

    handleDescriptionChange(e) {
        this.setState({ category: { ...this.state.category, description: e.target.value } });
    }

    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId="category.name">
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col sm="10">
                        <Form.Control value={this.state.category.name} onChange={this.handleNameChange} />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="category.description">
                    <Form.Label column sm="2">Description</Form.Label>
                    <Col sm="10">
                        <Form.Control as="textarea" rows="4" value={this.state.category.description} onChange={this.handleDescriptionChange} />
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-2 float-right" onClick={(e) => this.props.onSave(this.state.category, e)}>
                    Save category
                </Button>
            </Form>
        )
    }
}