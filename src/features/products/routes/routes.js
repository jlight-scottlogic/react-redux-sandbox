export default {
    create: (categoryId) => `/categories/${categoryId}/products/create`,
    edit: (categoryId, productId) => `/categories/${categoryId}/products/${productId}/edit`
}