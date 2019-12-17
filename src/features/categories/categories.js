import React from 'react';
import CategoryList from './categories-list';
import { connect } from 'react-redux';
import { loadCategories } from './redux/actions/categories-action-creators';
import Container from 'react-bootstrap/Container';
import { selectCategoriesListItems } from './redux/selectors/categories-selectors';

class CategoriesComponent extends React.Component {

    componentDidMount() {
        this.props.dispatch(loadCategories());
    }

    render() {
        return (
            <Container>
                <CategoryList list={this.props.categories}></CategoryList>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    categories: selectCategoriesListItems(state)
})

export default connect(
    mapStateToProps
)(CategoriesComponent);