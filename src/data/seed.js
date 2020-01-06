import categories from "./categories";
import products from "./products";
import permissions from "./permissions";

export default () => {
    localStorage.setItem('categories', JSON.stringify(categories));
    localStorage.setItem('products', JSON.stringify(products));
    localStorage.setItem('permissions', JSON.stringify(permissions));
}