import { Component, Input, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormControl, FormGroupDirective } from "@angular/forms";

@Component({
    selector: "app-course-description",
    templateUrl: "./course-description.component.html",
    styleUrls: ["./course-description.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseDescriptionComponent implements OnInit {
    description: FormControl;

    constructor(private formGroupDirective: FormGroupDirective) {}

    ngOnInit() {
        this.description = this.formGroupDirective.control.get("description") as FormControl;
    }
}
