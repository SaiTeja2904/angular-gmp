import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";
import { User } from "src/app/login/_models/user";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
    isAuthenticated = false;
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.authService.isAuthenticated$.subscribe(isAuthenticated => (this.isAuthenticated = isAuthenticated));
    }

    getUserInfo() {
        const user: User = this.authService.getUserInfo();
        console.log("UserInfo", user);
    }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl("");
    }
}
