import { Action } from "@ngrx/store";
import { User, Login_Model } from "src/app/login/_models/user";

export enum UserActions {
    LoginUser = "[User] Login User",
    LoginUserSuccess = "[User] Login User Success",
    LogOffUser = "[User] LogOff User"
}

export class LoginUser implements Action {
    public readonly type = UserActions.LoginUser;
    constructor(public payload: Login_Model) {}
}

export class LoginUserSuccess implements Action {
    public readonly type = UserActions.LoginUserSuccess;
    constructor(public user: User) {}
}

export class LogOffUser implements Action {
    public readonly type = UserActions.LogOffUser;
}

export type UserActionTypes = LoginUser | LoginUserSuccess | LogOffUser;
