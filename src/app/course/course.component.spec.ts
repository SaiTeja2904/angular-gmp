import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CourseComponent } from "./course.component";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

describe("CourseComponent", () => {
    let component: CourseComponent;
    let fixture: ComponentFixture<CourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CourseComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should set the search value upon search event", () => {
        component.courseSearched("ABC");
        expect(component.searchValue).toBe("ABC");
    });
});
