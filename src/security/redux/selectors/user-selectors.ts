import { SandboxState } from "../../../redux/state";
import { typedPipe } from "../../../utils/functional-helpers";

const selectUser = (state: SandboxState) => state.user;

export const selectUserIsLoggedIn = typedPipe(
    selectUser,
    user => user.loggedIn
);