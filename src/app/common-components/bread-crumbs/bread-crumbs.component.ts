import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-bread-crumbs",
    templateUrl: "./bread-crumbs.component.html",
    styleUrls: ["./bread-crumbs.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadCrumbsComponent {
    public completePath = "";

    @Input() public set path(path) {
        this.completePath = path.join("/ ");
    }
}
