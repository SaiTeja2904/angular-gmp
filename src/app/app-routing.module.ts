import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthguardService } from "./guards/authguard.service";

const routes: Routes = [
    {
        path: "login",
        loadChildren: "./login/login.module#LoginModule"
    },
    {
        path: "courses",
        loadChildren: "./course/course.module#CourseModule",
        canActivate: [AuthguardService]
    },
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "**",
        component: PageNotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
