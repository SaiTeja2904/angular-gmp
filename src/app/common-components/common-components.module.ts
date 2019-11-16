import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { BreadCrumbsComponent } from "./bread-crumbs/bread-crumbs.component";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, BreadCrumbsComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, BreadCrumbsComponent]
})
export class CommonComponentsModule {}
