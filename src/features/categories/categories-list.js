import React from 'react';
import CategorySquare from './categories-list-item';
import { Button } from 'react-bootstrap';
import routes from './routes/routes';
import { Link } from 'react-router-dom';

export default class CategoriesListComponent extends React.Component {
    render() {
        return (
            <>
                <div>
                    {
                        this.props.list.map(element => (
                            <CategorySquare key={element.id} category={element}></CategorySquare>
                        ))
                    }
                </div>
                <Button as={Link} variant="primary" to={routes.create} className="mb-2 float-right">Add category</Button>
            </>
        )
    }
}