import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course.component';
import { RouterModule } from '@angular/router';
import { CommonComponentsModule } from '../common-components/common-components.module';

@NgModule({
  declarations: [CourseComponent],
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
