import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

import { Course } from "../_models/course";

@Component({
    selector: "app-course-item",
    templateUrl: "./course-item.component.html",
    styleUrls: ["./course-item.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent {
    @Input() public course: Course;
    @Output() public edit = new EventEmitter();
    @Output() public delete = new EventEmitter();

    public onEdit() {
        this.edit.emit({ id: this.course.id });
    }

    public onDelete() {
        this.delete.emit({ id: this.course.id });
    }
}
