import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Course } from "../_models/course";
import { searchInArrayOfObjects } from "src/app/shared-utils/array.utils";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.less"]
})
export class CoursesListComponent implements OnInit {
    @Input() public set search(search: string) {
        this.coursesToBeDisplayed = searchInArrayOfObjects(search, this.courses, "title");
    }
    public courses: Course[];
    public coursesToBeDisplayed;
    public ngOnInit() {
        this.courses = [
            {
                id: "ang-01",
                title: "Intro to Angular",
                creationDate: new Date("11-08-2019"),
                duration: 126,
                description: "A Brief introduction to Angular"
            },
            {
                id: "ang-02",
                title: "Angular Advanced",
                creationDate: new Date("11-09-2019"),
                duration: 128,
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            {
                id: "js-dp-01",
                title: "Structural and Creational Patterns in JS",
                creationDate: new Date("08-11-2019"),
                duration: 150,
                description: "A complete explaination of structural and creational patterns for JS"
            },
            {
                id: "js-dp-02",
                title: "Behavioural Pattern in JS",
                creationDate: new Date("11-18-2019"),
                duration: 90,
                description: "A complete explaination of behavioural patterns for JS"
            }
        ];
        this.coursesToBeDisplayed = this.courses;
    }

    public actionPerformedOnItem(event) {
        console.log(event);
    }

    public coursesTrackFunction(index, item) {
        if (!item) {
            return null;
        }
        return item.id;
    }
}
