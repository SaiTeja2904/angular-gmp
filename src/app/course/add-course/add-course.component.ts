import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Course } from "../_models/course";
import { CourseService } from "../course.service";
import { AppService } from "src/app/app.service";
import { AppState } from "src/app/store/state/app.state";
import { Store } from "@ngrx/store";
import { CreateCourse } from 'src/app/store/actions/courses.actions';

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

    constructor(private router: Router, private appService: AppService, private store: Store<AppState>) {}

    ngOnInit() {
        this.appService.breadCrumbs$.next(["Courses", "Add"]);
        this.name = new FormControl("", Validators.required);
        this.description = new FormControl("", Validators.required);
        this.length = new FormControl("", Validators.required);
        this.date = new FormControl("", Validators.required);
        this.authors = new FormControl("", Validators.required);
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
            authors: this.transformAuthors(formValue.authors)
        };
        this.store.dispatch(new CreateCourse(newCourse));
    }

    private transformAuthors(authors) {
        return authors.split(",").map(author => ({ id: Math.ceil(Math.random() * 10000), name: author }));
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
