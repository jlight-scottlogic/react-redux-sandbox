import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl'
import { connectForm, createFormObject } from '../../forms';
import { required } from '../../forms/validation';

const CategoryEditFormComponent = ({ form, updateValue, submitForm }) => (
    <Form>
        <Form.Group as={Row} controlId={form.controls.name.id}>
            <Form.Label column sm="2">Name</Form.Label>
            <Col>
                <Form.Control
                    value={form.controls.name.value}
                    onChange={updateValue}
                    isValid={form.isSubmitted && form.controls.name.isValid}
                    isInvalid={form.isSubmitted && !form.controls.name.isValid} />
                {
                    form.controls.name.errors.map((error, index) => (
                        <FormControl.Feedback key={index} type="invalid">
                            {error}
                        </FormControl.Feedback>
                    ))
                }
            </Col>
        </Form.Group>

        <Form.Group as={Row} controlId={form.controls.description.id}>
            <Form.Label column sm="2">Description</Form.Label>
            <Col>
                <Form.Control as="textarea" rows="4"
                    value={form.controls.description.value}
                    onChange={updateValue}
                    isValid={form.isSubmitted && form.controls.description.isValid}
                    isInvalid={form.isSubmitted && !form.controls.description.isValid} />
                {
                    form.controls.description.errors.map((error, index) => (
                        <FormControl.Feedback key={index} type="invalid">
                            {error}
                        </FormControl.Feedback>
                    ))
                }
            </Col>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2 float-right" onClick={submitForm}>
            Save category
        </Button>
    </Form>
)

export default connectForm((props) =>
    createFormObject(props.category)({
        name: {
            rules: [
                required
            ],
        },
        description: {
            rules: [
                required
            ]
        }
    })
)(CategoryEditFormComponent)

