import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: "./login/login.module#LoginModule"
  },
  {
    path: "courses",
    loadChildren: "./course/course.module#CourseModule"
  },
  {
    path: "",
    loadChildren: "./course/course.module#CourseModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
