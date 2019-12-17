import { pipe } from "../../../../utils/functional-helpers";

const selectProducts = (state) => state.products;

const selectProductsList = pipe(
    selectProducts, 
    products => products.list
);

export const selectProductsListItems = pipe(
    selectProductsList,
    list => list.items
);

export const selectProductsListIsLoading = pipe(
    selectProductsList,
    list => list.isLoading
);
