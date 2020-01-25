import { Injectable } from "@angular/core";
import { Course } from "./_models/course";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { APP_URLS } from "../constants/URL_CONSTANTS";

@Injectable()
export class CourseService {
    private coursesCount = 3;

    constructor(private httpClient: HttpClient) {}

    public createCourse(course) {
        // this.courseList.set(newCourseId, { id: newCourseId, ...course });
    }

    public getItemById(courseId: number) {
        return this.httpClient.get(`${APP_URLS.GET_COURSES}/${courseId}`);
    }

    public updateItem(id, updatedCourse) {
        // this.courseList.set(id, updatedCourse);
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
        return this.getCourses({ start: 0, count: this.coursesCount > 3 ? 3 : this.coursesCount });
    }

    public searchCourse(searchQuery: string): Observable<Course[]> {
        return this.getCourses({ textFragment: searchQuery });
    }

    public loadMoreCourses(): Observable<Course[]> {
        this.coursesCount += 3;
        return this.getCourses({ start: 0, count: this.coursesCount });
    }
}
