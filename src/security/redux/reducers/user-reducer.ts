import { UserState } from "../types/user-types"
import { AnyAction } from "redux"
import * as actions from '../actions/user-actions';

const initialState: UserState = {
    loggedIn: false,
    permissions: []
}

const reducer = (state: UserState = initialState, action: AnyAction): UserState => {

    if (actions.userLoginAction.matches(action)) {
        return {
            ...state,
            loggedIn: true
        }
    }

    if (actions.userLogoutAction.matches(action)) {
        return {
            ...state,
            loggedIn: false,
            permissions: []
        }
    }

    if (actions.loadUserPermissionsSuccessAction.matches(action)) {
        return {
            ...state,
            permissions: action.payload
        }
    }

    return state;
}

export default reducer;