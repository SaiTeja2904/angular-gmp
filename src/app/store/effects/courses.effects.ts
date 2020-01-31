import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import {
    CoursesActions,
    SearchCourses,
    LoadMoreCourses,
    SearchCoursesSuccess,
    DeleteCourse,
    DeleteCourseSuccess,
    CreateCourse,
    CreateCourseSuccess,
    EditCourse,
    EditCourseSuccess,
    GetInitialCourses,
    GetInitialCoursesSuccess,
    LoadMoreCoursesSuccess
} from "../actions/courses.actions";
import { map, switchMap, first, tap } from "rxjs/operators";
import { Router } from "@angular/router";
import { Course } from "src/app/course/_models/course";
import { CourseService } from "src/app/course/course.service";

@Injectable()
export class CoursesEffects {
    @Effect()
    getAllCourses$ = this.actions$.pipe(
        ofType<GetInitialCourses>(CoursesActions.GetInitialCourses),
        switchMap(_ =>
            this.courseService.getIntialLoadCourses().pipe(
                first(),
                map((courses: Course[]) => new GetInitialCoursesSuccess(courses))
            )
        )
    );

    @Effect()
    searchCourses$ = this.actions$.pipe(
        ofType<SearchCourses>(CoursesActions.SearchCourses),
        map(action => action.searchText),
        switchMap(searchInput =>
            this.courseService.searchCourse(searchInput).pipe(
                first(),
                map((courses: Course[]) => new SearchCoursesSuccess(courses))
            )
        )
    );

    @Effect()
    loadMoreCourses$ = this.actions$.pipe(
        ofType<LoadMoreCourses>(CoursesActions.LoadMoreCourses),
        switchMap(_ =>
            this.courseService.loadMoreCourses().pipe(
                first(),
                map((courses: Course[]) => new LoadMoreCoursesSuccess(courses))
            )
        )
    );

    @Effect()
    createCourse$ = this.actions$.pipe(
        ofType<CreateCourse>(CoursesActions.CreateCourse),
        map(action => action.course),
        switchMap(course =>
            this.courseService.createCourse(course).pipe(
                first(),
                map(_ => new CreateCourseSuccess())
            )
        )
    );

    @Effect({ dispatch: false })
    createCourseSuccess$ = this.actions$.pipe(
        ofType<CreateCourseSuccess>(CoursesActions.CreateCourseSuccess),
        tap(_ => this.router.navigateByUrl("courses"))
    );

    @Effect()
    editCourse$ = this.actions$.pipe(
        ofType<EditCourse>(CoursesActions.EditCourse),
        map(action => action.course),
        switchMap(course =>
            this.courseService.updateItem(course).pipe(
                first(),
                map(_ => new EditCourseSuccess())
            )
        )
    );

    @Effect({ dispatch: false })
    editCourseSuccess$ = this.actions$.pipe(
        ofType<EditCourseSuccess>(CoursesActions.EditCourseSuccess),
        tap(_ => this.router.navigateByUrl("courses"))
    );

    @Effect()
    deleteCourse$ = this.actions$.pipe(
        ofType<DeleteCourse>(CoursesActions.DeleteCourse),
        map(action => action.courseId),
        switchMap((courseId: number) =>
            this.courseService.removeItem(courseId).pipe(
                first(),
                map(_ => new DeleteCourseSuccess())
            )
        )
    );

    @Effect()
    deleteCourseSuccess$ = this.actions$.pipe(
        ofType<DeleteCourseSuccess>(CoursesActions.DeleteCourseSuccess),
        map(_ => new GetInitialCourses())
    );

    constructor(private actions$: Actions, private courseService: CourseService, private router: Router) {}
}
