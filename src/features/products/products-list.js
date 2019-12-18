import React from 'react';
import ProductListItem from './products-list-item';

class ProductsListComponent extends React.Component {

    render() {
        if (this.props.products == null) {
            return null;
        }

        return (
            <div>
                {
                    this.props.products.map(prod => <ProductListItem key={prod.id} product={prod}/>)
                }
            </div>
        )
    }
}

export default ProductsListComponent;