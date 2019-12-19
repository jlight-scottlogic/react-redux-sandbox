import { pipe } from "../../../utils/functional-helpers";

const selectUiState = state => state.ui;

const selectAlertState = pipe(
    selectUiState,
    ui => ui.alert
);

export const selectAlertVisible = pipe(
    selectAlertState,
    alert => alert.visible
)

export const selectAlertMessage = pipe(
    selectAlertState,
    alert => alert.message
)

export const selectAlertStyle = pipe(
    selectAlertState,
    alert => alert.style
)