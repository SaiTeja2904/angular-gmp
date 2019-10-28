import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { RouterModule } from '@angular/router';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { SearchCourseComponent } from './search-course/search-course.component';
import { CourseItemComponent } from './course-item/course-item.component';

@NgModule({
  declarations: [CourseComponent, CoursesListComponent, SearchCourseComponent, CourseItemComponent],
  imports: [
    CommonModule,
    CommonComponentsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CourseComponent
      }
    ])
  ]
})
export class CourseModule {}
