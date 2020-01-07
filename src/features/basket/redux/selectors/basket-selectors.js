import { pipe } from "../../../../utils/functional-helpers";
import { selectProductsListItems } from "../../../products/redux/selectors/products-selectors";

const selectBasket = (state) => state.basket;

const selectBasketItems = pipe(
    selectBasket,
    basket => basket.items ?? []
);

export const selectBasketItemsCount = pipe(
    selectBasketItems,
    items => items.map(i => i.quantity).reduce((total, val) => total + val, 0)
)

export const selectBasketItemsIds = pipe(
    selectBasketItems,
    items => items.map(i => i.productId)
)

export const selectBasketContents = (state) => {
    const products = selectProductsListItems(state);
    const items = selectBasketItems(state);

    return products.map(product => {
        const matchingProduct = items.find(item => item.productId === product.id);
        return {
            product,
            quantity: matchingProduct != null ? matchingProduct.quantity : 0
        }
    })
}