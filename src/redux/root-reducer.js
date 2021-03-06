import { combineReducers } from "redux";
import categories from '../features/categories/redux/reducers/categories-reducer';
import products from '../features/products/redux/reducers/products-reducer';
import basket from '../features/basket/redux/reducers/basket-reducer';
import alert from '../components/alert/redux/alert-reducer';
import user from '../security/redux/reducers/user-reducer';
import { connectRouter } from "connected-react-router";

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    categories,
    products,
    ui: combineReducers({
        alert
    }),
    user,
    basket
})