import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CommonComponentsModule } from "./common-components/common-components.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppService } from './app.service';

@NgModule({
    declarations: [AppComponent, PageNotFoundComponent],
    imports: [BrowserModule, AppRoutingModule, CommonComponentsModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
