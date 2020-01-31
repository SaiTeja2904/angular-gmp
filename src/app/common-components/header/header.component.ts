import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
import { userNameSelector, isUserAuthenticatedSelector } from "src/app/store/selectors/users.selectors";
import { combineLatest } from "rxjs";
import { LogOffUser } from "src/app/store/actions/users.actions";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"]
})
export class HeaderComponent implements OnInit {
    isAuthenticated = false;
    userName: string;
    constructor(private store: Store<AppState>) {}

    ngOnInit() {
        combineLatest([this.store.select(userNameSelector), this.store.select(isUserAuthenticatedSelector)]).subscribe(
            ([userName, isAuthenticated]) => {
                this.userName = userName && userName.first;
                this.isAuthenticated = isAuthenticated;
            }
        );
    }

    logout() {
        this.store.dispatch(new LogOffUser());
    }
}
