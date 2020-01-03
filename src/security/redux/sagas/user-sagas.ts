import { takeLatest, call, all, put } from "redux-saga/effects";
import * as actions from '../actions/user-actions';
import * as client from '../../../client/fake-client';
import { showAlertAction } from "../../../components/alert/redux/alert-actions";

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


export default function* rootSaga() {
    yield all([
        loadPermissionsSaga()
    ])
}