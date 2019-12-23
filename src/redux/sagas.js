import products from '../features/products/redux/sagas/product-sagas';

export default function* rootSaga() {
    yield products();
}