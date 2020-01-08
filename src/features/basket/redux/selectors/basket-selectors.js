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

    return items.reduce((arr, item) => {
        const matchingProduct = products.find(product => item.productId === product.id);
        return matchingProduct != null
            ? [...arr,
            {
                product: matchingProduct,
                quantity: item.quantity
            }]
            : arr;
    }, [])
}