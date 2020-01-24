import { Component, OnInit, Input } from "@angular/core";

import { Course } from "../_models/course";
import { searchInArrayOfObjects } from "src/app/shared-utils/array.utils";
import { CourseService } from "../course.service";
import { ActionTypes } from "../_models/actionTypes";
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

    public actionPerformedOnItem(event) {
        const { actionType, id: courseId } = event;
        if (actionType === ActionTypes.DELETE) {
            this.deleteCourse(courseId);
        } else if (actionType === ActionTypes.EDIT) {
            this.editCourse(courseId);
        }
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
