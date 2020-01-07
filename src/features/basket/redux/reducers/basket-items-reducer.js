import * as actions from '../actions/basket-actions';

const intitialState = [];

const reducer = (state = intitialState, action) => {

    if (actions.addItemToBasketAction.matches(action)) {

        const indexToReplace = state.findIndex(item => item.productId === action.payload.id)

        return indexToReplace < 0
            ? [
                ...state,
                { productId: action.payload.id, quantity: 1 }
            ]
            : [
                ...state.slice(0, indexToReplace),
                { productId: action.payload.id, quantity: state[indexToReplace].quantity + 1 },
                ...state.slice(indexToReplace + 1)
            ];
    }

    return state;
}

export default reducer