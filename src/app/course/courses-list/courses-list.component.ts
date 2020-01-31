import { Component, OnInit } from "@angular/core";

import { Course } from "../_models/course";
import { CourseService } from "../course.service";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/state/app.state";
import { Store } from "@ngrx/store";
import {
    GetInitialCourses,
    SearchCourses,
    LoadMoreCourses,
    DeleteCourse,
    GetAllCourseAuthors
} from "src/app/store/actions/courses.actions";
import { coursesSelector } from "src/app/store/selectors/courses.selectors";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.less"]
})
export class CoursesListComponent implements OnInit {
    public courses$: Observable<Course[]>;

    constructor(private router: Router, private appService: AppService, private store: Store<AppState>) {}

    public ngOnInit() {
        this.store.dispatch(new GetInitialCourses());
        this.store.dispatch(new GetAllCourseAuthors());
        this.courses$ = this.store.select(coursesSelector);
        this.appService.breadCrumbs$.next(["Courses"]);
    }

    onEdit(event) {
        const { id: courseId } = event;
        this.editCourse(courseId);
    }

    onDelete(event) {
        const { id: courseId } = event;
        this.deleteCourse(courseId);
    }

    onLoadMore() {
        this.store.dispatch(new LoadMoreCourses());
    }

    public coursesTrackFunction(index, item) {
        if (!item) {
            return null;
        }
        return item.id;
    }

    private deleteCourse(courseId) {
        if (confirm("Are you sure you want to delete?")) {
            this.store.dispatch(new DeleteCourse(courseId));
        }
    }

    private editCourse(courseId) {
        this.router.navigate([`/courses/${courseId}`]);
    }

    public addCourse() {
        this.router.navigate(["courses/new"]);
    }

    public courseSearched(event) {
        if (event.length > 2) {
            this.store.dispatch(new SearchCourses(event));
        }
    }
}
