import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { EditCourseComponent } from './edit-course.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesSharedModule } from '../courses-shared/courses-shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CoursesSharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditCourseComponent
      }
    ])
  ],
  declarations: [EditCourseComponent],
  providers: [DatePipe]
})
export class EditCourseModule {}
