import { Component, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-course",
    templateUrl: "./course.component.html",
    styleUrls: ["./course.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent {
    public path = ["Courses"];
}
