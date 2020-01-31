import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from '../state/courses.state';
import { Course } from 'src/app/course/_models/course';

export const coursesFeatureSelector = createFeatureSelector<CoursesState>("courses");

export const coursesSelector = createSelector(coursesFeatureSelector, courseState => courseState.courses);

export const courseDetailsSelector = (courseId: number) =>
    createSelector(coursesSelector, courses => courses.find((course: Course) => course.id === courseId));
