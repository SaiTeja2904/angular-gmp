import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Course } from "../_models/course";

@Component({
  selector: "app-course-item",
  templateUrl: "./course-item.component.html",
  styleUrls: ["./course-item.component.less"]
})
export class CourseItemComponent {
  @Input("course") course: Course;
}
