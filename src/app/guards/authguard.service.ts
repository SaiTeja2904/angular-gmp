import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../core/services/auth.service";
import { of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class AuthguardService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isUserAuthenticated()) {
            return of(true);
        }
        this.router.navigate(["/login"]);
        return of(false);
    }
    constructor(private authService: AuthService, private router: Router) {}
}
