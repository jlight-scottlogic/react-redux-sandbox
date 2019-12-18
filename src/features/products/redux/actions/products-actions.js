import { createReduxAction } from "../../../../redux/redux-action";

export const loadProductsAction = createReduxAction('LOAD_PRODUCTS');
export const loadProductsSuccessAction = createReduxAction('LOAD_PRODUCTS_SUCCESS');

export const createProductAction = createReduxAction('CREATE_PRODUCT');
export const createProductSuccessAction = createReduxAction('CREATE_PRODUCT_SUCCESS');