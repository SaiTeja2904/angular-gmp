import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonComponentsModule } from "./common-components/common-components.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AppService } from "./app.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpHeaderInterceptor } from "./core/interceptors/http-header.interceptor";
import { LoadingInterceptor } from "./core/interceptors/loading.interceptor";
import { LoaderComponent } from "./common-components/loader/loader.component";
import { EffectsModule } from "@ngrx/effects";
import { UserEffects } from "./store/effects/users.effects";
import { appReducers, metaReducers } from "./store/reducers/app.reducers";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { CoursesEffects } from './store/effects/courses.effects';

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonComponentsModule,
        HttpClientModule,
        StoreModule.forRoot(appReducers, { metaReducers }),
        EffectsModule.forRoot([UserEffects, CoursesEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 10
        })
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpHeaderInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
