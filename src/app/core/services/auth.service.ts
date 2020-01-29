import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "src/app/login/_models/user";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    isAuthenticated$ = new BehaviorSubject<boolean>(false);
    user$ = new BehaviorSubject<User>(null);

    constructor() {
        const userInfo = this.getUserInfo();
        const isAuthenticated = userInfo ? userInfo.isAuthenticated : false;
        this.isAuthenticated$.next(isAuthenticated);
        this.user$.next(userInfo);
    }

    login(user: User) {
        localStorage.setItem("userInfo", JSON.stringify(user));
        this.isAuthenticated$.next(true);
        this.user$.next(this.getUserInfo());
    }

    logout() {
        localStorage.removeItem("userInfo");
        this.isAuthenticated$.next(false);
    }

    getUserInfo(): User {
        const userInfo = localStorage.getItem("userInfo");
        return userInfo ? JSON.parse(userInfo) : null;
    }

    isAuthenticated() {
        return this.isAuthenticated$.value;
    }

    isUserAuthenticated() {
        const userInfo = this.getUserInfo();
        return userInfo ? userInfo.isAuthenticated : false;
    }
}
