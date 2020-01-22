import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Course } from "../_models/course";
import { CourseService } from "../course.service";

@Component({
    selector: "app-add-course",
    templateUrl: "./add-course.component.html",
    styleUrls: ["./add-course.component.less"]
})
export class AddCourseComponent implements OnInit {
    newCourseForm: FormGroup;
    title: FormControl;
    description: FormControl;
    duration: FormControl;
    date: FormControl;
    authors: FormControl;

    constructor(private router: Router, private courseService: CourseService) {}

    ngOnInit() {
        this.title = new FormControl("", Validators.required);
        this.description = new FormControl("", Validators.required);
        this.duration = new FormControl("", Validators.required);
        this.date = new FormControl("", Validators.required);
        this.authors = new FormControl([], Validators.required);
        this.newCourseForm = new FormGroup({
            title: this.title,
            description: this.description,
            duration: this.duration,
            creationDate: this.date,
            authors: this.authors
        });
    }

    createCourse() {
        const formValue = this.newCourseForm.value;
        const newCourse: Course = {
            ...formValue,
            creationDate: new Date(formValue.creationDate),
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
