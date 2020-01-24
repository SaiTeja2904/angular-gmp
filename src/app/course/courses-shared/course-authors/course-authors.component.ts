import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormControl, FormGroupDirective } from "@angular/forms";

@Component({
    selector: "app-course-authors",
    templateUrl: "./course-authors.component.html",
    styleUrls: ["./course-authors.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseAuthorsComponent implements OnInit {
    authors: FormControl;

    constructor(private formGroupDirective: FormGroupDirective) {}

    ngOnInit() {
        this.authors = this.formGroupDirective.control.get("authors") as FormControl;
    }
}
