import { Component, OnInit } from "@angular/core";
import { Course } from "../_models/course";

@Component({
  selector: "app-courses-list",
  templateUrl: "./courses-list.component.html",
  styleUrls: ["./courses-list.component.less"]
})
export class CoursesListComponent implements OnInit {
  courses: Course[];
  search: string = "";
  constructor() {}

  ngOnInit() {
    this.courses = [
      {
        id: "ang-01",
        title: "Intro to Angular",
        creationDate: new Date(),
        duration: 126,
        description: "A Breif introduction to Angular"
      },
      {
        id: "ang-02",
        title: "Angular Advanced",
        creationDate: new Date(),
        duration: 128,
        description: "Advanced Concepts of Angular"
      },
      {
        id: "js-dp-01",
        title: "Structural and Creational Patterns in JS",
        creationDate: new Date(),
        duration: 150,
        description: "A complete explaination of structural and creational patterns for JS"
      },
      {
        id: "js-dp-02",
        title: "Behavioural Pattern in JS",
        creationDate: new Date(),
        duration: 90,
        description: "A complete explaination of behavioural patterns for JS"
      }
    ];
  }
}
