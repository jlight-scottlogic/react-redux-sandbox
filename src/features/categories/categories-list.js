import React from 'react';
import CategorySquare from './categories-list-item';
import { Button } from 'react-bootstrap';
import routes from './routes/routes';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectUserHasPermission } from '../../security/redux/selectors/user-selectors';
import permission from '../../security/permission';

class CategoriesListComponent extends React.Component {
    render() {

        const buttonMarkup = this.props.canAddCategory
            ? (<Button as={Link} variant="primary" to={routes.create} className="mb-2 float-right">Add category</Button>)
            : null;

        return (
            <>
                <div>
                    {
                        this.props.list.map(element => (
                            <CategorySquare key={element.id} category={element}></CategorySquare>
                        ))
                    }
                </div>
                {buttonMarkup}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    canAddCategory: selectUserHasPermission(permission.category.add)(state)
})

export default connect(mapStateToProps)(CategoriesListComponent);