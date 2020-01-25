import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from "@angular/common";
import { Course } from "../_models/course";
import { CourseService } from "../course.service";
import { AppService } from "src/app/app.service";

@Component({
    selector: "app-edit-course",
    templateUrl: "./edit-course.component.html",
    styleUrls: ["./edit-course.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditCourseComponent implements OnInit {
    courseForm: FormGroup;
    name: FormControl;
    description: FormControl;
    length: FormControl;
    date: FormControl;
    authors: FormControl;
    courseId: number;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private courseService: CourseService,
        private datePipe: DatePipe,
        private appService: AppService
    ) {}

    ngOnInit() {
        this.route.params.subscribe(({ id }) => {
            this.courseId = id;
        });
        this.name = new FormControl("", Validators.required);
        this.description = new FormControl("", Validators.required);
        this.length = new FormControl(length, Validators.required);
        this.date = new FormControl(this.datePipe.transform("", "yyyy-MM-dd"), Validators.required);
        this.authors = new FormControl("", Validators.required);
        this.courseForm = new FormGroup({
            name: this.name,
            description: this.description,
            length: this.length,
            date: this.date,
            authors: this.authors
        });
        this.courseService.getItemById(this.courseId).subscribe((course: Course) => {
            if (course) {
                const { name, description, length, date, authors } = course;
                let authorsNames = authors.map(({ name, lastName }) => `${name} ${lastName}`).join(", ");
                this.appService.breadCrumbs$.next(["Courses", "Edit", name]);
                this.courseForm.patchValue({
                    name,
                    description,
                    length,
                    date: this.datePipe.transform(date, "yyyy-MM-dd"),
                    authors: authorsNames
                });
            }
        });
    }

    submitCourse() {
        const formValue = this.courseForm.value;
        const newCourse: Course = {
            ...formValue,
            id: this.courseId,
            date: new Date(Date.parse(formValue.date)),
            authors: [formValue.authors]
        };
        this.courseService.updateItem(this.courseId, newCourse);
        this.router.navigate(["/courses"]);
    }

    cancel() {
        if (!this.courseForm.dirty) {
            this.router.navigate(["/courses"]);
            return;
        }
        if (confirm("Do you really want to cancel course creation?")) {
            this.router.navigate(["/courses"]);
        }
    }
}
