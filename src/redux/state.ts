import { ProductsState } from "../features/products/redux/types/products-types";
import { UserState } from "../security/redux/types/user-types";

export type SandboxState = Readonly<{
    router: any
    ui: any,
    categories: any,
    products: ProductsState,
    user: UserState
}>