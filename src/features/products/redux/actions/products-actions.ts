import { createTypedReduxAction } from "../../../../redux/typed-redux-action";
import { Product } from "../types/products-types";

export const loadProductsAction = createTypedReduxAction<{ categoryId: number }>('LOAD_PRODUCTS');
export const loadProductsSuccessAction = createTypedReduxAction<Product[]>('LOAD_PRODUCTS_SUCCESS');

export const createProductAction = createTypedReduxAction<Product>('CREATE_PRODUCT');
export const createProductSuccessAction = createTypedReduxAction<Product>('CREATE_PRODUCT_SUCCESS');