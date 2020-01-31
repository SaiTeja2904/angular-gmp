import { UserState, initialUserState } from './user.state';
import { CoursesState, initialCoursesState } from './courses.state';

export interface AppState {
  user: UserState;
  courses: CoursesState;
}

export const intialAppState: AppState = {
  user: initialUserState,
  courses: initialCoursesState
};
