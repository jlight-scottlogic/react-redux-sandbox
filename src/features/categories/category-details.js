import React from 'react';
import { connect } from 'react-redux';
import { loadCategory } from './redux/actions/categories-action-creators';
import Display from './category-details-display';
import { loadProductsForCategory } from '../products/redux/actions/products-action-creators';
import { selectProductsListItems } from '../products/redux/selectors/products-selectors';

class CategoryComponent extends React.Component {

    componentDidMount() {
        this.props.loadCategory(this.props.match.params.categoryId);
        this.props.loadProductsForCategory(this.props.match.params.categoryId);
    }

    render() {
        return (
            <Display {...this.props}></Display>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.categoryId,
    products: selectProductsListItems(state)
});

const mapDispatchToProps = {
    loadCategory,
    loadProductsForCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);