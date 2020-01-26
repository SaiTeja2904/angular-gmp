import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";

import { Course } from "../_models/course";
import { searchInArrayOfObjects } from "src/app/shared-utils/array.utils";
import { CourseService } from "../course.service";
import { Router } from "@angular/router";
import { AppService } from "src/app/app.service";
import { Observable } from "rxjs";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.less"]
})
export class CoursesListComponent implements OnInit {
    public courses$: Observable<Course[]>;

    constructor(private courseService: CourseService, private router: Router, private appService: AppService) {}

    public ngOnInit() {
        this.courses$ = this.courseService.getIntialLoadCourses();
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
        this.courses$ = this.courseService.loadMoreCourses();
    }

    public coursesTrackFunction(index, item) {
        if (!item) {
            return null;
        }
        return item.id;
    }

    private deleteCourse(courseId) {
        if (confirm("Are you sure you want to delete?")) {
            this.courseService.removeItem(courseId).subscribe(_ => {
                this.courses$ = this.courseService.loadMoreCourses();
            });
        }
    }

    private editCourse(courseId) {
        this.router.navigate([`/courses/${courseId}`]);
    }

    public addCourse() {
        this.router.navigate(["courses/new"]);
    }

    public courseSearched(event) {
        this.courses$ = this.courseService.searchCourse(event);
    }
}
