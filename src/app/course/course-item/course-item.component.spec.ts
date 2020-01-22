import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { CourseItemComponent } from "./course-item.component";
import { ActionTypes } from "../_models/actionTypes";
import { DurationPipe } from "../../core/pipes/shared-pipes/duration.pipe";

describe("CourseItemComponent", () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseItemComponent, DurationPipe],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseItemComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should emit an event upon edit click", () => {
        const emitSpy = spyOn(component.actionPerformed, "emit");
        component.course = { id: "1", title: "ABC", creationDate: new Date(), duration: 120, description: "AA", authors: [""] };
        component.onEdit();
        expect(emitSpy).toHaveBeenCalledWith({ actionType: ActionTypes.EDIT, id: "1" });
    });

    it("should emit an event upon delete click", () => {
        const emitSpy = spyOn(component.actionPerformed, "emit");
        component.course = { id: "1", title: "ABC", creationDate: new Date(), duration: 120, description: "AA", authors: [""] };
        component.onDelete();
        expect(emitSpy).toHaveBeenCalledWith({ actionType: ActionTypes.DELETE, id: "1" });
    });
});
