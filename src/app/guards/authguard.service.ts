import { Injectable } from "@angular/core";
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../core/services/auth.service";

@Injectable({
    providedIn: "root"
})
export class AuthguardService implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.authService.isUserAuthenticated()) {
            return true;
        }
        this.router.navigate(["/login"]);
        return false;
        throw new Error("Method not implemented.");
    }
    constructor(private authService: AuthService, private router: Router) {}
}
