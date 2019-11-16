import { Component, Input } from "@angular/core";

@Component({
    selector: "app-bread-crumbs",
    templateUrl: "./bread-crumbs.component.html",
    styleUrls: ["./bread-crumbs.component.less"]
})
export class BreadCrumbsComponent {
    public completePath = "";

    @Input() public set path(path) {
        this.completePath = path.join("/ ");
    }
}
