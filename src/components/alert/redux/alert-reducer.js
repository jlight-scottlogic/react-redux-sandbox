import { showAlertAction, hideAlertAction } from "./alert-actions";

const initialState = {
    visible: false,
    style: null,
    message: ''
};

export default (state = initialState, action) => {

    if (showAlertAction.matches(action)) {
        return {
            ...state,
            visible: true,
            message: action.payload.message,
            style: action.payload.style
        }
    }

    if (hideAlertAction.matches(action)) {
        return initialState;
    }

    return state;
}