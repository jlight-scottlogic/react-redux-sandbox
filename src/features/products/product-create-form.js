import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { connectForm, createFormObject } from '../../forms';
import { required } from '../../forms/validation';
import { TextBox } from '../../forms/components';

const ProductCreateFormComponent = ({ form, submitForm }) => (
    <Form>        
        <TextBox control={form.controls.name} />
        <TextBox control={form.controls.description} />

        <Button variant="primary" type="submit" className="mt-2 float-right" onClick={submitForm}>
            Save product
        </Button>
    </Form>
)

export default connectForm(props =>
    createFormObject({
        name: '',
        description: '',
        categoryId: props.categoryId
    })({
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
)(ProductCreateFormComponent)