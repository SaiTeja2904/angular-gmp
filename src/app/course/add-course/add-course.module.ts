import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCourseComponent } from "./add-course.component";
import { RouterModule } from "@angular/router";
import { CoursesSharedModule } from '../courses-shared/courses-shared.module';
import { SharedPipesModule } from '../../core/pipes/shared-pipes/shared-pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedPipesModule,
        CoursesSharedModule,
        RouterModule.forChild([
            {
                path: "",
                component: AddCourseComponent
            }
        ])
    ],
    declarations: [AddCourseComponent]
})
export class AddCourseModule {}
