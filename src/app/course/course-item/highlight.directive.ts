import { Directive, Input, ElementRef, HostBinding } from "@angular/core";

import { Course } from "../_models/course";
import { daysdifference } from "src/app/shared-utils/date-time.utils";

const COLORS = {
    BLUE_COLOR: "blue",
    WHITE_COLOR: "white",
    GREEN_COLOR: "green"
};
@Directive({ selector: "[appHighlight]" })
export class HighlightDirective {
    @HostBinding("style.borderColor") borderColor: string;
    @Input() public set course(course: Course) {
        let { date: creationDate } = course;
        creationDate = new Date(creationDate);
        const currentDate = new Date();
        console.log(creationDate < currentDate);
        if (creationDate > currentDate) {
            this.borderColor = COLORS.BLUE_COLOR;
        } else if (creationDate < currentDate && daysdifference(creationDate, currentDate) < 15) {
            this.borderColor = COLORS.GREEN_COLOR;
        } else {
            this.borderColor = COLORS.WHITE_COLOR;
        }
    }

    constructor(private el: ElementRef) {
        this.el.nativeElement.style.border = "0.1rem solid";
    }
}
