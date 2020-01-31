import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BreadCrumbsComponent } from "./bread-crumbs/bread-crumbs.component";
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadCrumbsComponent, LoaderComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, BreadCrumbsComponent, LoaderComponent]
})
export class CommonComponentsModule {}
