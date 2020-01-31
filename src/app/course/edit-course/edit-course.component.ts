import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { DatePipe } from "@angular/common";
import { Course } from "../_models/course";
import { AppService } from "src/app/app.service";
import { EditCourse } from "src/app/store/actions/courses.actions";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
import { courseDetailsSelector } from "src/app/store/selectors/courses.selectors";

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
        private datePipe: DatePipe,
        private appService: AppService,
        private store: Store<AppState>
    ) {}

    ngOnInit() {
        this.route.params.subscribe(({ id }) => {
            this.courseId = +id;
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
        this.store
            .select(courseDetailsSelector(this.courseId))
            .subscribe((course: Course) => {
                if (course) {
                    const { name: courseName, description, length, date, authors } = course;
                    const authorsNames = authors.map(({ name }) => `${name}`).join(", ");
                    this.appService.breadCrumbs$.next(["Courses", "Edit", courseName]);
                    this.courseForm.patchValue({
                        name: courseName,
                        description,
                        length,
                        date: this.datePipe.transform(date, "yyyy-MM-dd"),
                        authors: authorsNames
                    });
                }
            })
            .unsubscribe();
    }

    submitCourse() {
        const formValue = this.courseForm.value;
        const newCourse: Course = {
            ...formValue,
            id: this.courseId,
            date: new Date(Date.parse(formValue.date)),
            authors: this.transformAuthors(formValue.authors)
        };
        this.store.dispatch(new EditCourse(newCourse));
    }

    private transformAuthors(authors) {
        return authors.split(",").map(author => ({ id: Math.ceil(Math.random() * 10000), name: author }));
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
