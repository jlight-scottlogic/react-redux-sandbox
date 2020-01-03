import { createUntypedReduxAction } from "../../../redux/typed-redux-action";

export const userLoginAction = createUntypedReduxAction('USER_LOGIN');
export const userLogoutAction = createUntypedReduxAction('USER_LOGOUT');