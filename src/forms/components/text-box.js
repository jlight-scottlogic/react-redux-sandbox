import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl'

export default ({ control }) => (
    <Form.Group as={Row} controlId={control.id}>
        <Form.Label column sm="2">{control.displayName}</Form.Label>
        <Col>
            <Form.Control
                value={control.value}
                onChange={e => control.update(e.target.id, e.target.value)}
                isValid={control.isSubmitted && control.isValid}
                isInvalid={control.isSubmitted && !control.isValid} />
            {
                control.errors.map((error, index) => (
                    <FormControl.Feedback key={index} type="invalid">
                        {error}
                    </FormControl.Feedback>
                ))
            }
        </Col>
    </Form.Group>
)