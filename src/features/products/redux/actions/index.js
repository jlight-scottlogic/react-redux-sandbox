import { ReduxAction } from "../../../../redux/redux-action";
import { get } from "../../../../client/fake-client";

export const loadProductsAction = new ReduxAction('LOAD_PRODUCTS');
export const loadProductsSuccessAction = new ReduxAction('LOAD_PRODUCTS_SUCCESS');

export const loadProductsForCategory = (categoryId) => (dispatch) => {
    dispatch(loadProductsAction.create(categoryId));

    return get(`categories/${categoryId}/products`)
        .then(list => {
            dispatch(loadProductsSuccessAction.create(list));
        })
}