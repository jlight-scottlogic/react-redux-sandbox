import { loadProductsAction, loadProductsSuccessAction } from "../actions";

const initialState = {
    items: [],
    isLoading: false
}

const reducer = (state = initialState, action) => {

    if (loadProductsAction.matches(action)) {
        return {
            ...state,
            items: [],
            isLoading: true
        };
    }

    if (loadProductsSuccessAction.matches(action)) {
        return {
            ...state,
            items: action.payload,
            isLoading: false
        };
    }

    return state;
}

export default reducer;