import { pipe } from "../../../../utils/functional-helpers";

const selectBasket = (state) => state.basket;

const selectBasketItems = pipe(
    selectBasket,
    basket => basket.items ?? []
);

export const selectBasketItemsCount = pipe(
    selectBasketItems,
    items => items.length
)