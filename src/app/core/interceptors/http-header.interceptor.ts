import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { AuthService } from "../services/auth.service";

@Injectable()
export class HttpHeaderInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.getAuthToken();
        if (token) {
            const modifiedRequest = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${token}`)
            });
            return next.handle(modifiedRequest);
        }
        return next.handle(req);
    }
}
