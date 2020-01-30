import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../core/services/auth.service";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "../store/state/app.state";
import { isUserAuthenticatedSelector } from "../store/selectors/users.selectors";
import { map } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class AuthguardService implements CanActivate {
    constructor(private store: Store<AppState>, private router: Router) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store.select(isUserAuthenticatedSelector).pipe(
            map(isAuthenticated => {
                if (!isAuthenticated) {
                    this.router.navigate([""]);
                }
                return isAuthenticated;
            })
        );
    }
}
