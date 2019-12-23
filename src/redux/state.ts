import { ProductsState } from "../features/products/redux/types/products-types";

export type SandboxState = Readonly<{
    router: any
    ui: any,
    categories: any,
    products: ProductsState
}>