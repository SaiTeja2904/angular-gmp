import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Course } from "../_models/course";
import { ActionTypes } from "../_models/actionTypes";

@Component({
    selector: "app-course-item",
    templateUrl: "./course-item.component.html",
    styleUrls: ["./course-item.component.less"]
})
export class CourseItemComponent {
    @Input() public course: Course;
    @Output() public actionPerformed = new EventEmitter();

    public onEdit() {
        this.actionPerformed.emit({ actionType: ActionTypes.EDIT, id: this.course.id });
    }

    public onDelete() {
        this.actionPerformed.emit({ actionType: ActionTypes.DELETE, id: this.course.id });
    }
}
