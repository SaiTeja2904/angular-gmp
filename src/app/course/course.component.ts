import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-course",
  templateUrl: "./course.component.html",
  styleUrls: ["./course.component.less"]
})
export class CourseComponent implements OnInit {
  path = ["Courses"];
  constructor() {}

  ngOnInit() {}
}
