import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseComponent } from "./course.component";
import { RouterModule } from "@angular/router";
import { CommonComponentsModule } from "../common-components/common-components.module";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { SearchCourseComponent } from "./search-course/search-course.component";
import { CourseItemComponent } from "./course-item/course-item.component";
import { LoadMoreComponent } from "./load-more/load-more.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { FormsModule } from "@angular/forms";
import { HighlightDirective } from "./course-item/highlight.directive";
import { DurationPipe } from "./duration.pipe";
import { CourseService } from "./course.service";

@NgModule({
    declarations: [
        CourseComponent,
        CoursesListComponent,
        SearchCourseComponent,
        CourseItemComponent,
        LoadMoreComponent,
        AddCourseComponent,
        HighlightDirective,
        DurationPipe
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        RouterModule.forChild([
            {
                path: "",
                component: CourseComponent
            }
        ]),
        FormsModule
    ],
    providers: [CourseService]
})
export class CourseModule {}
