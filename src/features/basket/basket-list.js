import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBasketItemsIds } from './redux/selectors/basket-selectors';
import { loadProductsByIdAction } from '../products/redux/actions/products-actions';

export default () => {

    const productIds = useSelector(selectBasketItemsIds);
    // const basket = useSelector(selectBasket);
    const dispatch = useDispatch();

    const memoizedCallback = useCallback(
        () => {
            dispatch(loadProductsByIdAction.create(productIds));
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [dispatch],
    );

    useEffect(() => {
        memoizedCallback();
    },
        [memoizedCallback]
    )


    return (
        <>
        </>
    )
}