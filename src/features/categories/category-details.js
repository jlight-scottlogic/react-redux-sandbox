import React from 'react';
import { connect } from 'react-redux';
import { loadCategory } from './redux/actions/categories-action-creators';
import Display from './category-details-display';
import { loadProductsForCategory } from '../products/redux/actions/products-action-creators';
import { selectProductsListItems, selectProductsListIsLoading } from '../products/redux/selectors/products-selectors';
import productRoutes from '../products/routes/routes';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Spinner from '../../components/spinner/spinner';

class CategoryComponent extends React.Component {

    componentDidMount() {
        this.props.loadCategory(this.props.match.params.categoryId);
        this.props.loadProductsForCategory(this.props.match.params.categoryId);
    }

    render() {
        return (
            <div>
                <Button as={Link} variant="primary mb-2 float-right" to={productRoutes.add(this.props.id)}>Add product</Button>
                <div className="clearfix"></div>
                <Spinner isLoading={this.props.isLoading} />
                <Display {...this.props}></Display>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    id: ownProps.match.params.categoryId,
    products: selectProductsListItems(state),
    isLoading: selectProductsListIsLoading(state)
});

const mapDispatchToProps = {
    loadCategory,
    loadProductsForCategory
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);