import React from 'react';
import Form from './product-create-form';
import { connect } from 'react-redux';
import { createProductAction } from './redux/actions/products-actions';

class ProductCreateComponent extends React.Component {

    handleSave(product, e) {
        e.preventDefault();
        this.props.createProduct(product);
    }

    render() {

        if (this.props.categoryId == null) {
            return null;
        }

        return (
            <Form categoryId={this.props.categoryId} onSave={(product, e) => this.handleSave(product, e)}></Form>
        )
    }

}

const mapStateToProps = (_, { match: { params } }) => ({
    categoryId: params.categoryId
})

const mapDispatchToProps = (dispatch) => ({
    createProduct: (product) => dispatch(createProductAction.create(product))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductCreateComponent);