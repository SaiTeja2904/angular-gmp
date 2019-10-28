import { Component, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-bread-crumbs",
  templateUrl: "./bread-crumbs.component.html",
  styleUrls: ["./bread-crumbs.component.less"]
})
export class BreadCrumbsComponent implements OnChanges {
  @Input() path = [];
  private completePath = "";

  ngOnChanges() {
    this.completePath = this.path.join("/ ");
  }
}
