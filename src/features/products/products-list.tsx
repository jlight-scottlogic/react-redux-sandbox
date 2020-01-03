import React from 'react';
import ProductListItem from './products-list-item';
import { Product } from './redux/types/products-types';

class ProductsListComponent extends React.Component<{ products: Product[] }> {

    render() {
        if (this.props.products == null) {
            return null;
        }

        return (
            <>
                {
                    this.props.products.map(prod => <ProductListItem key={prod.id} product={prod} />)
                }
            </>
        )
    }
}

export default ProductsListComponent;