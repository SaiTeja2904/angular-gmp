import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap } from "rxjs/operators";
import { LoaderService } from "../services/loader.service";

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loaderService: LoaderService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.loaderService.setLoadingStatus(true);
        return next.handle(req).pipe(
            tap(
                (event: HttpEvent<any>) => {
                    if (event instanceof HttpResponse) {
                        this.loaderService.setLoadingStatus(false);
                    }
                },
                (err: any) => {
                    this.loaderService.setLoadingStatus(false);
                }
            )
        );
    }
}
