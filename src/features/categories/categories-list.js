import React from 'react';
import CategorySquare from './categories-list-item';

export default class CategoriesListComponent extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.list.map(element => (
                        <CategorySquare key={element.id} category={element}></CategorySquare>
                    ))
                }
            </div>
        )
    }
}