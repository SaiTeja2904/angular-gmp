import { Directive, Input, ElementRef, OnInit } from "@angular/core";
import { Course } from "../_models/course";
import { daysdifference } from "src/app/shared-utils/date-time.utils";

@Directive({ selector: "[appHighlight]" })
export class HighlightDirective {
    constructor(private el: ElementRef) {
        this.el.nativeElement.style.border = "0.1rem solid";
    }
    @Input() public set course(course: Course) {
        const { creationDate } = course;
        const currentDate = new Date();
        if (creationDate > currentDate) {
            this.el.nativeElement.style.borderColor = "blue";
        } else if (creationDate < currentDate && daysdifference(creationDate, currentDate) < 15) {
            this.el.nativeElement.style.borderColor = "green";
        } else {
            this.el.nativeElement.style.borderColor = "white";
        }
    }
}
