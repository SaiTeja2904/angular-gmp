import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCourseComponent } from "./add-course.component";
import { RouterModule } from "@angular/router";
import { SharedPipesModule } from "src/app/core/pipes/shared-pipes/shared-pipes.module";
import { CoursesSharedModule } from '../courses-shared/courses-shared.module';

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
