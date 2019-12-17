import { get, put } from "../../../../client/fake-client";
import { push } from 'connected-react-router';
import routes from '../../routes/routes';
import * as actions from './categories-actions';

export const loadCategory = (id) => async (dispatch) => {
    dispatch(actions.loadCategoryAction.create(id));

    const category = await get(`categories/${id}`);

    return dispatch(actions.loadCategorySuccessAction.create(category));
}

export const loadCategories = () => async (dispatch) => {
    dispatch(actions.loadCategoriesAction.create());

    const list = await get('categories');

    return dispatch(actions.loadCategoriesSuccessAction.create(list));
}

export const editCategory = (category) => async (dispatch) => {
    dispatch(actions.editCategoryAction.create());

    await put(`categories/${category.id}`, category);

    await dispatch(actions.editCategorySuccessAction.create(category));

    return dispatch(push(routes.details(category.id)));
}