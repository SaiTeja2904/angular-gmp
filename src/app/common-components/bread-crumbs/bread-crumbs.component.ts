import { Component, Input, ChangeDetectionStrategy, OnInit, ChangeDetectorRef } from "@angular/core";
import { AppService } from "src/app/app.service";

@Component({
    selector: "app-bread-crumbs",
    templateUrl: "./bread-crumbs.component.html",
    styleUrls: ["./bread-crumbs.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadCrumbsComponent implements OnInit {
    public completePath = "";

    constructor(private appService: AppService, private cdr: ChangeDetectorRef) {}
    ngOnInit() {
        this.appService.breadCrumbs$.subscribe(path => {
            this.completePath = path && path.join(" / ");
            this.cdr.detectChanges();
        });
    }
}
