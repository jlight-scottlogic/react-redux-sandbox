import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connectForm, createFormObject } from '../../forms';
import { required } from '../../forms/validation';
import { TextBox, TextArea } from '../../forms/components';

const CategoryEditFormComponent = ({ form, submitForm }) => (
    <Form>        
        <TextBox control={form.controls.name} />
        <TextArea control={form.controls.description} />

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

