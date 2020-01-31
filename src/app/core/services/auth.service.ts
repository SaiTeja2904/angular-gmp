import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { User, Login_Model } from "src/app/login/_models/user";
import { HttpClient } from "@angular/common/http";
import { APP_URLS } from "src/app/constants/URL_CONSTANTS";

import { map, tap, switchMap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class AuthService {
    isAuthenticated$ = new BehaviorSubject<boolean>(false);
    user$ = new BehaviorSubject<User>(null);

    constructor(private httpService: HttpClient) {
        this.isAuthenticated$.next(this.isUserAuthenticated());
        this.user$.next(this.getUserInfo());
    }

    login({ login, password }: Login_Model): Observable<User> {
        return this.httpService
            .post(APP_URLS.API_LOGIN, { login, password })
            .pipe(switchMap(token => this.httpService.post<User>(APP_URLS.USER_DETAILS, token)));
    }

    logout() {
        localStorage.clear();
        this.isAuthenticated$.next(false);
    }

    getUserInfo() {
        const userInfo = localStorage.getItem("userInfo");
        return userInfo ? JSON.parse(userInfo) : null;
    }

    isUserAuthenticated() {
        const _isAuthenticated = localStorage.getItem("isAuthenticated");
        return _isAuthenticated ? JSON.parse(_isAuthenticated) : false;
    }

    fetchUserDetails() {
        const token = localStorage.getItem("token");
        this.httpService.post(APP_URLS.USER_DETAILS, { token }).subscribe((userDetails: User) => {
            localStorage.setItem("userInfo", JSON.stringify(userDetails));
            this.user$.next(userDetails);
        });
    }

    getAuthToken() {
        return localStorage.getItem("token");
    }
}
