import { all, call, put, takeLatest } from 'redux-saga/effects'
import * as client from '../../../../client/fake-client';
import * as actions from '../actions/products-actions';
import { showAlertAction } from '../../../../components/alert/redux/alert-actions';
import { push } from "connected-react-router";
import routes from '../../../categories/routes/routes';

function* createProductSaga() {
    yield takeLatest(actions.createProductAction.type, createProduct);
}

function* createProduct(action) {
    try {
        yield call(client.post, 'products', action.payload);

        yield all([
            put(actions.createProductSuccessAction.create(action.payload)),
            put(push(routes.details(action.payload.categoryId)))
        ]);
    } catch (e) {
        yield put(showAlertAction.create({ style: 'danger', message: 'error!' }));
    }
}

export default function* rootSaga() {
    yield all([
        createProductSaga()
    ])
}