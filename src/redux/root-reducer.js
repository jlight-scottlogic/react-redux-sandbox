import { combineReducers } from "redux";
import categories from '../features/categories/redux/reducers/categories-reducer';
import products from '../features/products/redux/reducers/products-reducer';

const reducer = combineReducers({
    categories,
    products
})

export default reducer;