import { ReduxAction } from "../../../../redux/redux-action";

export const loadCategoryAction = new ReduxAction('LOAD_CATEGORY');
export const loadCategorySuccessAction = new ReduxAction('LOAD_CATEGORY_SUCCESS');

export const loadCategoriesAction = new ReduxAction('LOAD_CATEGORIES');
export const loadCategoriesSuccessAction = new ReduxAction('LOAD_CATEGORIES_SUCCESS');

export const editCategoryAction = new ReduxAction('EDIT_CATEGORY');
export const editCategorySuccessAction = new ReduxAction('EDIT_CATEGORY_SUCCESS');