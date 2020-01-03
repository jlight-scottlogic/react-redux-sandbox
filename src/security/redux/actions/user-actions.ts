import { createUntypedReduxAction, createTypedReduxAction } from "../../../redux/typed-redux-action";

export const userLoginAction = createUntypedReduxAction('USER_LOGIN');
export const userLogoutAction = createUntypedReduxAction('USER_LOGOUT');

export const loadUserPermissionsAction = createUntypedReduxAction('LOAD_USER_PERMISSIONS');
export const loadUserPermissionsSuccessAction = createTypedReduxAction<string[]>('LOAD_USER_PERMISSIONS_SUCCESS');