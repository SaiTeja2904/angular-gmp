import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Course } from "../_models/course";
import { CourseService } from "../course.service";
import { AppService } from "src/app/app.service";

@Component({
    selector: "app-add-course",
    templateUrl: "./add-course.component.html",
    styleUrls: ["./add-course.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddCourseComponent implements OnInit {
    newCourseForm: FormGroup;
    name: FormControl;
    description: FormControl;
    length: FormControl;
    date: FormControl;
    authors: FormControl;

    constructor(private router: Router, private courseService: CourseService, private appService: AppService) {}

    ngOnInit() {
        this.appService.breadCrumbs$.next(["Courses", "Add"]);
        this.name = new FormControl("", Validators.required);
        this.description = new FormControl("", Validators.required);
        this.length = new FormControl("", Validators.required);
        this.date = new FormControl("", Validators.required);
        this.authors = new FormControl([], Validators.required);
        this.newCourseForm = new FormGroup({
            name: this.name,
            description: this.description,
            length: this.length,
            date: this.date,
            authors: this.authors
        });
    }

    createCourse() {
        const formValue = this.newCourseForm.value;
        const newCourse: Course = {
            ...formValue,
            date: new Date(),
            authors: [formValue.authors]
        };
        this.courseService.createCourse(newCourse);
        this.router.navigate(["/courses"]);
    }

    cancelCourseCreation() {
        if (!this.newCourseForm.dirty) {
            this.router.navigate(["/courses"]);
            return;
        }
        if (confirm("Do you really want to cancel course creation?")) {
            this.router.navigate(["/courses"]);
        }
    }
}
