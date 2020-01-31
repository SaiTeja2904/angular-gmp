import { Action } from "@ngrx/store";
import { Course } from "../../course/_models/course";

export enum CoursesActions {
    GetInitialCourses = "[Courses] Get All Courses",
    GetInitialCoursesSuccess = "[Courses] Get All Courses Success",
    SearchCourses = "[Courses] Search Courses",
    SearchCoursesSuccess = "[Courses] Search Courses Success",
    LoadMoreCourses = "[Courses] Load More Courses",
    LoadMoreCoursesSuccess = "[Courses] Load More Courses Success",
    CreateCourse = "[Courses] Create Course",
    CreateCourseSuccess = "[Courses] Create Course Success",
    EditCourse = "[Courses] Edit Course",
    EditCourseSuccess = "[Courses] Edit Course Success",
    DeleteCourse = "[Courses] Delete Course",
    DeleteCourseSuccess = "[Courses] Delete Course Success"
}

export class GetInitialCourses implements Action {
    public readonly type = CoursesActions.GetInitialCourses;
}

export class GetInitialCoursesSuccess implements Action {
    public readonly type = CoursesActions.GetInitialCoursesSuccess;
    constructor(public courses: Course[]) {}
}

export class SearchCourses implements Action {
    public readonly type = CoursesActions.SearchCourses;
    constructor(public searchText: string) {}
}

export class SearchCoursesSuccess implements Action {
    public readonly type = CoursesActions.SearchCoursesSuccess;
    constructor(public courses: Course[]) {}
}

export class LoadMoreCourses implements Action {
    public readonly type = CoursesActions.LoadMoreCourses;
}

export class LoadMoreCoursesSuccess implements Action {
    public readonly type = CoursesActions.LoadMoreCoursesSuccess;
    constructor(public courses: Course[]) {}
}

export class CreateCourse implements Action {
    public readonly type = CoursesActions.CreateCourse;
    constructor(public course: Course) {}
}

export class CreateCourseSuccess implements Action {
    public readonly type = CoursesActions.CreateCourseSuccess;
}

export class EditCourse implements Action {
    public readonly type = CoursesActions.EditCourse;
    constructor(public course: Course) {}
}

export class EditCourseSuccess implements Action {
    public readonly type = CoursesActions.EditCourseSuccess;
}

export class DeleteCourse implements Action {
    public readonly type = CoursesActions.DeleteCourse;
    constructor(public courseId: number) {}
}

export class DeleteCourseSuccess implements Action {
    public readonly type = CoursesActions.DeleteCourseSuccess;
}

export type CoursesActionTypes =
    | GetInitialCourses
    | GetInitialCoursesSuccess
    | SearchCourses
    | SearchCoursesSuccess
    | LoadMoreCourses
    | LoadMoreCoursesSuccess
    | CreateCourse
    | CreateCourseSuccess
    | EditCourse
    | EditCourseSuccess
    | DeleteCourse
    | DeleteCourseSuccess;
