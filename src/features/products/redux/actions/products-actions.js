import { ReduxAction } from "../../../../redux/redux-action";

export const loadProductsAction = new ReduxAction('LOAD_PRODUCTS');
export const loadProductsSuccessAction = new ReduxAction('LOAD_PRODUCTS_SUCCESS');

export const createProductAction = new ReduxAction('CREATE_PRODUCT');
export const createProductSuccessAction = new ReduxAction('CREATE_PRODUCT_SUCCESS');