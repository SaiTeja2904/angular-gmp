import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Course } from "../_models/course";

@Component({
    selector: "app-courses-list",
    templateUrl: "./courses-list.component.html",
    styleUrls: ["./courses-list.component.less"]
})
export class CoursesListComponent implements OnInit, OnChanges {
    @Input() public search;
    public courses: Course[];

    public ngOnInit() {
        this.courses = [
            {
                id: "ang-01",
                title: "Intro to Angular",
                creationDate: new Date(),
                duration: 126,
                description: "A Brief introduction to Angular"
            },
            {
                id: "ang-02",
                title: "Angular Advanced",
                creationDate: new Date(),
                duration: 128,
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
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

    public ngOnChanges() {
        console.log("Searched for : ", this.search);
    }

    public actionPerformedOnItem(event) {
        console.log(event);
    }

    public coursesTrackFunction(index, item) {
        if (!item) {
            return null;
        }
        console.log(item);
        return item.id;
    }
}
