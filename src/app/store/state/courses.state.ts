import { Course, CourseAuthor } from "src/app/course/_models/course";

export interface CoursesState {
    courses: Course[];
    courseAuthors: CourseAuthor[];
}

export const initialCoursesState: CoursesState = {
    courses: [],
    courseAuthors: []
};
