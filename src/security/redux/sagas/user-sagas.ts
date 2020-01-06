import { takeLatest, call, all, put } from "redux-saga/effects";
import * as actions from '../actions/user-actions';
import * as client from '../../../client/fake-client';
import { showAlertAction } from "../../../components/alert/redux/alert-actions";
import { push } from "connected-react-router";

function* loadPermissionsSaga() {
    yield takeLatest(actions.userLoginAction.type, loadPermissions);
}

export function* loadPermissions() {
    try {
        yield put(actions.loadUserPermissionsAction.create());

        const permissions = yield call(client.get, `permissions`);

        yield put(actions.loadUserPermissionsSuccessAction.create(permissions));
        
    } catch (e) {
        yield all([
            put(showAlertAction.create({ style: 'danger', message: 'could not log you in!' })),
            put(actions.userLogoutAction.create())
        ]);
    }
}

function* logoutSaga() {
    yield takeLatest(actions.userLogoutAction.type, logout);
}

export function* logout() {
    try {
        yield put(push('/'));
        
    } catch (e) {
        yield all([
            put(showAlertAction.create({ style: 'danger', message: 'could not log you out!' })),
        ]);
    }
}

export default function* rootSaga() {
    yield all([
        loadPermissionsSaga(),
        logoutSaga()
    ])
}