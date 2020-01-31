import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { UserActions, LoginUser, LoginUserSuccess, LogOffUser } from "../actions/users.actions";
import { map, switchMap, tap, first } from "rxjs/operators";
import { Router } from "@angular/router";
import { AuthService } from 'src/app/core/services/auth.service';
import { NoopAction } from '../actions/common.actions';

@Injectable()
export class UserEffects {
    @Effect()
    loginUser$ = this.actions$.pipe(
        ofType<LoginUser>(UserActions.LoginUser),
        map(action => action.payload),
        switchMap(({ login, password }) => {
            return this.authService.login({ login, password }).pipe(
                first(),
                map(user => new LoginUserSuccess(user))
            );
        })
    );

    @Effect({ dispatch: false })
    loginUserSuccess$ = this.actions$.pipe(
        ofType<LoginUserSuccess>(UserActions.LoginUserSuccess),
        tap(_ => {
            this.router.navigateByUrl("courses");
        })
    );

    @Effect()
    logOffUser$ = this.actions$.pipe(
        ofType<LogOffUser>(UserActions.LogOffUser),
        map(_ => {
            this.router.navigateByUrl("");
            return new NoopAction();
        })
    );

    constructor(private actions$: Actions, private authService: AuthService, private router: Router) {}
}
