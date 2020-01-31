import { ActionReducerMap, ActionReducer, MetaReducer } from "@ngrx/store";
import { AppState } from "../state/app.state";
import { coursesReducer } from './courses.reducer';
import { userReducer } from './users.reducer';

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
        console.log("state", state);
        console.log("action", action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const appReducers: ActionReducerMap<AppState> = {
    user: userReducer,
    courses: coursesReducer
};
