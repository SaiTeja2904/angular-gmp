import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { CoursesListComponent } from "./courses-list.component";
import { CourseService } from "../course.service";

describe("CoursesListComponent", () => {
    let component: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesListComponent],
            providers: [CourseService],
            schemas: [NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should get value of search and reassign coursesToBeDisplayed", () => {
        component.search = "Intro";
        fixture.detectChanges();
        expect(component.coursesToBeDisplayed).toEqual([component.courses[0]]);
    });
});
