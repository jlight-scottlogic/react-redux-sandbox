import { get, put } from "../../../../client/fake-client";
import { push } from 'connected-react-router';
import routes from '../../routes/routes';
import * as actions from './categories-actions';
import { showSuccessAlert, showErrorAlert } from "../../../../components/alert/redux/alert-action-creators";

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

export const editCategory = (category) => (dispatch) => {
    dispatch(actions.editCategoryAction.create());

    return put(`categories/${category.id}`, category)
        .then(() => dispatch(actions.editCategorySuccessAction.create(category)).then(() => dispatch(showSuccessAlert('Category has been edited'))))
        .then(() => dispatch(push(routes.details(category.id))))        
        .catch(() => dispatch(showErrorAlert('Something went wrong!')))
}