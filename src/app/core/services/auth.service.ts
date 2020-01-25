import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { User } from "src/app/login/_models/user";
import { HttpClient } from "@angular/common/http";
import { APP_URLS } from "src/app/constants/URL_CONSTANTS";

import { map, tap } from "rxjs/operators";

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

    login(user: User) {
        return this.httpService.post(APP_URLS.API_LOGIN, user, { observe: "response" }).pipe(
            tap(({ status, body }: any) => {
                if (status === 200) {
                    localStorage.setItem("token", body.token);
                    localStorage.setItem("isAuthenticated", "true");
                    this.isAuthenticated$.next(this.isUserAuthenticated());
                }
            }),
            map(({ status }) => ({
                status
            }))
        );
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
}
