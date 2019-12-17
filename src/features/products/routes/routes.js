export default {
    add: (categoryId) => `/categories/${categoryId}/products/add`,
    edit: (categoryId, productId) => `/categories/${categoryId}/products/${productId}/edit`
}