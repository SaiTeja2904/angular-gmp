import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { BreadCrumbsComponent } from "./bread-crumbs.component";

describe("BreadCrumbsComponent", () => {
    let component: BreadCrumbsComponent;
    let fixture: ComponentFixture<BreadCrumbsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BreadCrumbsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadCrumbsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });

    it("should generate complete path of the module", () => {
        component.path = ["A", "B"];
        component.ngOnChanges();
        expect(component.completePath).toBe("A/ B");
    });
});
