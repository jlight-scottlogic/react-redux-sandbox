import { ReduxAction } from "../../../../redux/redux-action";
import { get, put } from "../../../../client/fake-client";
import { push } from 'connected-react-router';
import routes from '../../routes/routes';

export const loadCategoryAction = new ReduxAction('LOAD_CATEGORY');
export const loadCategorySuccessAction = new ReduxAction('LOAD_CATEGORY_SUCCESS');

export const loadCategoriesAction = new ReduxAction('LOAD_CATEGORIES');
export const loadCategoriesSuccessAction = new ReduxAction('LOAD_CATEGORIES_SUCCESS');

export const editCategoryAction = new ReduxAction('EDIT_CATEGORY');
export const editCategorySuccessAction = new ReduxAction('EDIT_CATEGORY_SUCCESS');

export const loadCategory = (id) => (dispatch) => {
    dispatch(loadCategoryAction.create(id));

    return get(`categories/${id}`)
        .then(category => dispatch(loadCategorySuccessAction.create(category)));
}

export const loadCategories = () => (dispatch) => {
    dispatch(loadCategoriesAction.create());

    return get('categories')
        .then(list => dispatch(loadCategoriesSuccessAction.create(list)));
}

export const editCategory = (category) => (dispatch) => {
    dispatch(editCategoryAction.create());

    return put(`categories/${category.id}`, category)
        .then(() => dispatch(editCategorySuccessAction.create(category)))
        .then(() => dispatch(push(routes.details(category.id))));
}