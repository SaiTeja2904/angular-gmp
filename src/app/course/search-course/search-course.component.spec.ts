import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { SearchCourseComponent } from "./search-course.component";
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

describe("SearchCourseComponent", () => {
    let component: SearchCourseComponent;
    let fixture: ComponentFixture<SearchCourseComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SearchCourseComponent],
            providers: [FormsModule, ReactiveFormsModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SearchCourseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should emit an event upon searching for a course", () => {
        spyOn(component.courseSearched, "emit");
        component.search = "ABC";
        component.onCourseSearched();
        expect(component.courseSearched.emit).toHaveBeenCalledWith("ABC");
    });
});
