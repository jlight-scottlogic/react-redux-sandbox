import { SandboxState } from "../../../../redux/state";
import { pipe } from '../../../../utils/functional-helpers';

const selectProducts = (state: SandboxState) => state.products;

const typedPipe = <A, B, C>(ab: (a: A) => B, bc: (b: B) => C): ((a: A) => C) => {
    return pipe(ab, bc);
}

const selectProductsList = typedPipe(
    selectProducts,
    products => products.list
);

export const selectProductsListItems = typedPipe(
    selectProductsList,
    list => list.items
);

export const selectProductsListIsLoading = typedPipe(
    selectProductsList,
    list => list.isLoading
);
