import products from '../features/products/redux/sagas/product-sagas';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        products()
    ]);
}