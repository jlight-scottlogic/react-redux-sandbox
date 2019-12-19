import { createReduxAction } from "../../../redux/redux-action";

export const showAlertAction = createReduxAction('SHOW_ALERT');
export const hideAlertAction = createReduxAction('HIDE_ALERT');