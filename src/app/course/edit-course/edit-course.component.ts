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
    title: FormControl;
    description: FormControl;
    duration: FormControl;
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
        const course: Course = this.courseService.getItemById(this.courseId);
        if (course) {
            const { title, description, duration, creationDate, authors } = course;
            this.appService.breadCrumbs$.next(["Courses", "Edit", title]);
            this.title = new FormControl(title, Validators.required);
            this.description = new FormControl(description, Validators.required);
            this.duration = new FormControl(duration, Validators.required);
            this.date = new FormControl(this.datePipe.transform(creationDate, "yyyy-MM-dd"), Validators.required);
            this.authors = new FormControl(authors, Validators.required);
            this.courseForm = new FormGroup({
                title: this.title,
                description: this.description,
                duration: this.duration,
                creationDate: this.date,
                authors: this.authors
            });
        }
    }

    submitCourse() {
        const formValue = this.courseForm.value;
        const newCourse: Course = {
            ...formValue,
            id: this.courseId,
            creationDate: new Date(Date.parse(formValue.creationDate)),
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
