/*
  id - Unique ID of the course.
  title - Title of the course.
  creationDate - Creation Date of the course.
  duration - Duration of the course.
  description - Description of the course.
*/
export interface Course {
  id: string;
  title: string;
  creationDate: Date;
  duration: number;
  description: string;
}
