import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { Course } from "../_models/course";
import { searchInArrayOfObjects } from "src/app/shared-utils/array.utils";
import { CourseService } from "../course.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.less"]
})
export class CoursesListComponent implements OnInit {
    public courses: Course[];
    public coursesToBeDisplayed: Course[];

    constructor(private courseService: CourseService, private router: Router) {}

    public ngOnInit() {
        this.loadCourses();
    }

    onEdit(event) {
        const { id: courseId } = event;
        this.editCourse(courseId);
    }

    onDelete(event) {
        const { id: courseId } = event;
        this.deleteCourse(courseId);
    }

    public coursesTrackFunction(index, item) {
        if (!item) {
            return null;
        }
        return item.id;
    }

    private deleteCourse(courseId) {
        if (confirm("Are you sure you want to delete?")) {
            this.courseService.removeItem(courseId);
            this.loadCourses();
        }
    }

    private editCourse(courseId) {
        this.router.navigate([`/courses/${courseId}`]);
    }

    private loadCourses() {
        this.courses = this.courseService.getList();
        this.coursesToBeDisplayed = this.courses;
    }

    public courseSearched(event) {
        this.coursesToBeDisplayed = searchInArrayOfObjects(event, this.courses, "title");
    }

    public addCourse() {
        this.router.navigate(["courses/new"]);
    }
}
