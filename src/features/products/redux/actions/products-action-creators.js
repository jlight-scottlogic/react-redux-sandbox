import { get } from "../../../../client/fake-client";
import * as actions from './products-actions';

export const loadProductsForCategory = (categoryId) => (dispatch) => {
    dispatch(actions.loadProductsAction.create(categoryId));

    return get(`categories/${categoryId}/products`)
        .then(list => {
            dispatch(actions.loadProductsSuccessAction.create(list));
        })
}