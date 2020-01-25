/*
  id - Unique ID of the course.
  title - Title of the course.
  creationDate - Creation Date of the course.
  duration - Duration of the course.
  description - Description of the course.
*/
export interface Course {
    id: string;
    name: string;
    date?: Date;
    length?: number;
    description?: string;
    authors?: { id: number; name: string; lastName: string }[];
    isTopRated?: boolean;
}
