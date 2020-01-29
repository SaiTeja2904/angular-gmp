import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "../state/user.state";

export const userSelector = createFeatureSelector<UserState>("user");

export const isUserAuthenticatedSelector = createSelector(userSelector, user => !!user);

export const userAuthTokenSelector = createSelector(userSelector, user => (user ? user.fakeToken : ""));

export const userNameSelector = createSelector(userSelector, user => (user ? user.name : ""));