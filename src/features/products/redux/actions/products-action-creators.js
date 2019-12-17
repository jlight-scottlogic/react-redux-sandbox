import { get, post } from "../../../../client/fake-client";
import * as actions from './products-actions';
import { push } from "connected-react-router";
import routes from '../../../categories/routes/routes';

export const loadProductsForCategory = (categoryId) => async (dispatch) => {
    dispatch(actions.loadProductsAction.create(categoryId));

    const list = await get(`categories/${categoryId}/products`);
    
    dispatch(actions.loadProductsSuccessAction.create(list));
}

export const createProduct = (product) => async (dispatch) => {
    dispatch(actions.createProductAction.create(product));

    await post('products', product);
    await dispatch(actions.createProductSuccessAction.create(product));

    return dispatch(push(routes.details(product.categoryId)));
}