import React from 'react';
import DisplayComponent from './basket-display';
import { useSelector } from 'react-redux';
import { selectBasketItemsCount } from './redux/selectors/basket-selectors';

export default () => {
    const basketCount = useSelector(selectBasketItemsCount)

    return (
        <DisplayComponent count={basketCount} />
    )
}