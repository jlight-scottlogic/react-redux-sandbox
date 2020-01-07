import React from 'react';
import BasketListItem from './basket-list-item'

export default (props) => (
    <>
        {props.items.map(item => <BasketListItem key={item.product.id} item={item} />)}
    </>
)