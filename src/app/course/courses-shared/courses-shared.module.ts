import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseAuthorsComponent } from "./course-authors/course-authors.component";
import { CourseDateComponent } from "./course-date/course-date.component";
import { CourseDescriptionComponent } from "./course-description/course-description.component";
import { CourseDurationComponent } from "./course-duration/course-duration.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedPipesModule } from "src/app/core/pipes/shared-pipes/shared-pipes.module";

@NgModule({
    declarations: [CourseAuthorsComponent, CourseDateComponent, CourseDescriptionComponent, CourseDurationComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, SharedPipesModule],
    exports: [CourseAuthorsComponent, CourseDateComponent, CourseDescriptionComponent, CourseDurationComponent]
})
export class CoursesSharedModule {}
