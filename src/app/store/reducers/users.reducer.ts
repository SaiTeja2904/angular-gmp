import { initialUserState, UserState } from "src/app/store/state/user.state";
import { UserActions, UserActionTypes } from '../actions/users.actions';

export const userReducer = (state = initialUserState, action: UserActionTypes): UserState => {
    switch (action.type) {
        case UserActions.LoginUserSuccess:
            return action.user;
        case UserActions.LogOffUser:
            return null;
        default:
            return state;
    }
};
