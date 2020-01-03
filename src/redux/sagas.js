import products from '../features/products/redux/sagas/product-sagas';
import user from '../security/redux/sagas/user-sagas';

import { all } from 'redux-saga/effects'

export default function* rootSaga() {
    yield all([
        products(),
        user()
    ]);
}