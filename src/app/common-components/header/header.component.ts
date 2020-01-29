import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import { Router } from "@angular/router";
import { User, Name_Model } from "src/app/login/_models/user";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
import { userSelector, userNameSelector, isUserAuthenticatedSelector } from "src/app/store/selectors/users.selectors";
import { combineLatest } from "rxjs";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
    isAuthenticated = false;
    userName: string;
    constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) {}

    ngOnInit() {
        // this.authService.isAuthenticated$.subscribe(isAuthenticated => {
        //     this.isAuthenticated = isAuthenticated;
        // });
        // this.store.select(userNameSelector).subscribe((userName: Name_Model) => {
        //     if (userName) {
        //         this.userName = userName.first;
        //     }
        // });

        combineLatest([this.store.select(userNameSelector), this.store.select(isUserAuthenticatedSelector)]).subscribe(
            ([userName, isAuthenticated]) => {
                this.userName = userName.first;
                this.isAuthenticated = isAuthenticated;
            }
        );
        // this.authService.user$.subscribe((user: User) => {
        //     if (user && user.name) {
        //         this.userName = user.name.first;
        //     }
        // });
    }

    logout() {
        this.authService.logout();
        this.router.navigateByUrl("");
    }
}
