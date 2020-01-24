import { Component, OnInit } from "@angular/core";
import { Validators, FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

import { AuthService } from "../core/services/auth.service";
import { User } from "./_models/user";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.less"]
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.loginForm = new FormGroup({
            name: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
        });
    }

    onSubmit() {
        const userInfo: User = { ...this.loginForm.value, isAuthenticated: true };
        this.authService.login(userInfo);
        this.router.navigateByUrl("/courses");
    }
}
