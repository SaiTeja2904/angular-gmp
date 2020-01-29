import { Injectable } from "@angular/core";
import { Subject, BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class LoaderService {
    showLoading$ = new Subject<boolean>();
    constructor() {}

    setLoadingStatus(status: boolean) {
        this.showLoading$.next(status);
    }
}
