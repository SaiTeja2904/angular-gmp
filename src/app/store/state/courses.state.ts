import { Course } from 'src/app/course/_models/course';


export interface CoursesState {
  courses: Course[];
}

export const initialCoursesState: CoursesState = {
  courses: []
};
