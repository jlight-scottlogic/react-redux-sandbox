const layoutLink = (id) => `/categories/${id}`;

export default {
    list: "/categories",
    add: "/categories/add",
    categoryLayout: layoutLink,
    details: (id) => `${layoutLink(id)}/details`,
    edit: (id) => `${layoutLink(id)}/edit`,
}
