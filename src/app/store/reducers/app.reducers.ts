import { ActionReducerMap, MetaReducer, ActionReducer } from "@ngrx/store";
import { userReducer } from "./users.reducer";
import { AppState } from '../state/app.state';

function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return (state, action) => {
        console.log("state", state);
        console.log("action", action);
        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<any>[] = [debug];

export const appReducers: ActionReducerMap<AppState> = {
    user: userReducer
};
