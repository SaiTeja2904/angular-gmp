import { Action } from "@ngrx/store";

export class NoopAction implements Action {
    public readonly type = "No Action";
}
