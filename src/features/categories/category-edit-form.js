import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl'
import { connectForm, createFormObject } from '../../forms';
import { required } from '../../forms/validation';

class CategoryEditFormComponent extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group as={Row} controlId={this.props.form.name.id}>
                    <Form.Label column sm="2">Name</Form.Label>
                    <Col>
                        <Form.Control
                            value={this.props.form.name.value}
                            onChange={this.props.updateValue}
                            isValid={this.props.form.name.touched && this.props.form.name.valid}
                            isInvalid={this.props.form.name.touched && !this.props.form.name.valid} />
                        {
                            this.props.form.name.errors.map((error, index) => (
                                <FormControl.Feedback key={index} type="invalid">
                                    {error}
                                </FormControl.Feedback>
                            ))
                        }
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId={this.props.form.description.id}>
                    <Form.Label column sm="2">Description</Form.Label>
                    <Col>
                        <Form.Control as="textarea" rows="4"
                            value={this.props.form.description.value}
                            onChange={this.props.updateValue}
                            isValid={this.props.form.description.touched && this.props.form.description.valid}
                            isInvalid={this.props.form.description.touched && !this.props.form.description.valid} />
                        {
                            this.props.form.description.errors.map((error, index) => (
                                <FormControl.Feedback key={index} type="invalid">
                                    {error}
                                </FormControl.Feedback>
                            ))
                        }
                    </Col>
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-2 float-right"
                    onClick={(e) => this.props.onSave(this.props.getFormValue(this.props.form), e)}>
                    Save category
                    </Button>
            </Form>
        )
    }
}

export default connectForm((props) => createFormObject(
    props.category,
    {
        name: [
            required
        ],
        description: [
            required
        ]
    }
))(CategoryEditFormComponent)

