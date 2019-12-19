import * as actions from "./alert-actions";

export const showErrorAlert = (message) => (dispatch) => dispatch(actions.showAlertAction.create({ message, style: 'danger' }));
export const showSuccessAlert = (message) => (dispatch) => dispatch(actions.showAlertAction.create({ message, style: 'success' }));
export const hideAlert = () => (dispatch) => dispatch(actions.hideAlertAction.create());
