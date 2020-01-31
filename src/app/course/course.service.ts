import { Injectable } from "@angular/core";
import { Course, CourseAuthor } from "./_models/course";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { APP_URLS } from "../constants/URL_CONSTANTS";

export const COURSES_CHANGE_COUNT = 3;
@Injectable({ providedIn: "root" })
export class CourseService {
    private coursesCount = COURSES_CHANGE_COUNT;

    constructor(private httpClient: HttpClient) {}

    public createCourse(course) {
        return this.httpClient.post(APP_URLS.GET_COURSES, course);
    }

    public updateItem(updatedCourse: Course) {
        const { id } = updatedCourse;
        return this.httpClient.patch(`${APP_URLS.GET_COURSES}/${id}`, updatedCourse);
    }

    public removeItem(courseId: number) {
        return this.httpClient.delete(`${APP_URLS.GET_COURSES}/${courseId}`);
    }

    private getCourses(options: any): Observable<Course[]> {
        const urlSearchParams = new URLSearchParams();
        if (Object.keys(options).length > 0) {
            Object.keys(options).forEach(eachKey => {
                urlSearchParams.append(eachKey, options[eachKey]);
            });
        }
        return this.httpClient.get(`${APP_URLS.GET_COURSES}?${urlSearchParams.toString()}`) as Observable<Course[]>;
    }

    public getIntialLoadCourses(): Observable<Course[]> {
        return this.getCourses({ start: 0, count: this.coursesCount > COURSES_CHANGE_COUNT ? COURSES_CHANGE_COUNT : this.coursesCount });
    }

    public searchCourse(searchQuery: string): Observable<Course[]> {
        return this.getCourses({ textFragment: searchQuery });
    }

    public loadMoreCourses(): Observable<Course[]> {
        this.coursesCount += COURSES_CHANGE_COUNT;
        return this.getCourses({ start: 0, count: this.coursesCount });
    }

    public getAllCourseAuthors(): Observable<CourseAuthor[]> {
        return this.httpClient.get<CourseAuthor[]>(APP_URLS.ALL_COURSE_AUTHORS);
    }
}
