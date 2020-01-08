import { createReduxAction } from "../../../../redux/redux-action";

export const addItemToBasketAction = createReduxAction('ADD_ITEM_TO_BASKET');
export const removeItemFromBasketAction = createReduxAction('REMOVE_ITEM_TO_BASKET');
export const setItemQuantityInBasketAction = createReduxAction('SET_BASKET_ITEM_QUANTITY');