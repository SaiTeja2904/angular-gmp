import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseComponent } from "./course.component";
import { RouterModule } from "@angular/router";
import { CommonComponentsModule } from "../common-components/common-components.module";
import { CoursesListComponent } from "./courses-list/courses-list.component";
import { SearchCourseComponent } from "./search-course/search-course.component";
import { CourseItemComponent } from "./course-item/course-item.component";
import { LoadMoreComponent } from "./load-more/load-more.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HighlightDirective } from "./course-item/highlight.directive";
import { CourseService } from "./course.service";
import { SharedPipesModule } from "../core/pipes/shared-pipes/shared-pipes.module";

@NgModule({
    declarations: [
        CourseComponent,
        CoursesListComponent,
        SearchCourseComponent,
        CourseItemComponent,
        LoadMoreComponent,
        HighlightDirective
    ],
    imports: [
        CommonModule,
        CommonComponentsModule,
        RouterModule.forChild([
            {
                path: "",
                component: CourseComponent,
                children: [
                    {
                        path: "",
                        component: CoursesListComponent
                    },
                    {
                        path: "new",
                        loadChildren: "./add-course/add-course.module#AddCourseModule"
                    },
                    {
                        path: ":id",
                        loadChildren: "./edit-course/edit-course.module#EditCourseModule"
                    }
                ]
            }
        ]),
        FormsModule,
        ReactiveFormsModule,
        SharedPipesModule
    ],
    providers: [CourseService]
})
export class CourseModule {}
