import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseItemComponent } from "./course-item.component";
import { ActionTypes } from "../_models/actionTypes";

describe("CourseItemComponent", () => {
    let component: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseItemComponent]
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
        spyOn(component.actionPerformed, "emit");
        component.course = { id: "1", title: "ABC", creationDate: new Date(), duration: 120, description: "AA" };
        component.onEdit();
        expect(component.actionPerformed.emit).toHaveBeenCalledWith({ actionType: ActionTypes.EDIT, id: "1" });
    });

    it("should emit an event upon delete click", () => {
        spyOn(component.actionPerformed, "emit");
        component.course = { id: "1", title: "ABC", creationDate: new Date(), duration: 120, description: "AA" };
        component.onDelete();
        expect(component.actionPerformed.emit).toHaveBeenCalledWith({ actionType: ActionTypes.DELETE, id: "1" });
    });
});
