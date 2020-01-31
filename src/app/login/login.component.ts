import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../core/services/auth.service";
import { User, Login_Model } from "./_models/user";
import { Store } from "@ngrx/store";
import { LoginUser } from '../store/actions/users.actions';

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private authService: AuthService, private store: Store<any>) {}

    ngOnInit() {
        this.authService.logout();
        this.loginForm = new FormGroup({
            login: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
        });
    }

    onSubmit() {
        const loginDetails: Login_Model = { ...this.loginForm.value };
        this.store.dispatch(new LoginUser(loginDetails));
    }
}
