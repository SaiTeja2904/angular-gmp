import { Course } from 'src/app/course/_models/course';


export interface CoursesState {
  courses: Course[];
  totalCoursesCount: number;
  coursesLoadedCount: number;
}

export const initialCoursesState: CoursesState = {
  courses: [],
  totalCoursesCount: 0,
  coursesLoadedCount: 5
};
