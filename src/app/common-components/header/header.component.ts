import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
    isAuthenticated = false;
    userName: string;
    constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        this.authService.isAuthenticated$.subscribe(isAuthenticated => (this.isAuthenticated = isAuthenticated));
        this.authService.user$.subscribe(user => {
            this.userName = user.name;
        });
    }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl("");
    }
}
