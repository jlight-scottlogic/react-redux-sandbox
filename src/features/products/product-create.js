import React from 'react';
import Form from './product-create-form';
import { post } from '../../client/fake-client';
import routes from '../categories/routes/routes'

export default class ProductCreateComponent extends React.Component {

    state = {
        categoryId: this.props.match.params.categoryId
    }

    handleSave(product, e) {
        e.preventDefault();

        product.categoryId = parseInt(this.state.categoryId);
        console.log(product);

        post('products', product).then(() => { this.props.history.push(routes.details(this.state.categoryId)) });
    }

    render() {

        if (this.state.categoryId == null) {
            return null;
        }

        return (
            <Form categoryId={this.state.categoryId} onSave={(product, e) => this.handleSave(product, e)}></Form>
        )
    }

}