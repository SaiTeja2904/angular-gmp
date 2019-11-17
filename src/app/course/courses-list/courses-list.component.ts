import { Component, OnInit, Input } from "@angular/core";

import { Course } from "../_models/course";
import { searchInArrayOfObjects } from "src/app/shared-utils/array.utils";
import { CourseService } from "../course.service";
import { ActionTypes } from "../_models/actionTypes";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.less"]
})
export class CoursesListComponent implements OnInit {
    @Input() public set search(search: string) {
        this.coursesToBeDisplayed = searchInArrayOfObjects(search, this.courses, "title");
    }
    public courses: Course[];
    public coursesToBeDisplayed: Course[];

    constructor(private courseService: CourseService) {}
    public ngOnInit() {
        this.loadCourses();
    }

    public actionPerformedOnItem(event) {
        const { actionType, id: courseId } = event;
        if (actionType === ActionTypes.DELETE) {
            this.deleteCourse(courseId);
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

    private loadCourses() {
        this.courses = this.courseService.getList();
        this.coursesToBeDisplayed = this.courses;
    }
}
