import React from 'react';

export default (props) => (
    <div>
        Hello I am product {props.item.product.name} and there are {props.item.quantity} of me
    </div>
)