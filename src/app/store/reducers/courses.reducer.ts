import { initialCoursesState, CoursesState } from "../state/courses.state";
import { CoursesActionTypes, CoursesActions } from "../actions/courses.actions";

export function coursesReducer(state = initialCoursesState, action: CoursesActionTypes): CoursesState {
    switch (action.type) {
        case CoursesActions.GetInitialCoursesSuccess:
        case CoursesActions.LoadMoreCoursesSuccess:
        case CoursesActions.SearchCoursesSuccess:
            return {
                ...state,
                courses: action.courses
            };
        case CoursesActions.GetAllCourseAuthorsSuccess:
            return {
                ...state,
                courseAuthors: action.authors
            };
        default:
            return state;
    }
}
