import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { CourseDurationComponent } from "./course-duration.component";
import { ReactiveFormsModule, FormGroupDirective, FormGroup, FormControl } from "@angular/forms";
import { DurationPipe } from "../../../core/pipes/shared-pipes/duration.pipe";

describe("CourseDurationComponent", () => {
    let component: CourseDurationComponent;
    let fixture: ComponentFixture<CourseDurationComponent>;
    let formGroup: FormGroup;
    let formGroupDirective: FormGroupDirective;

    beforeEach(async(() => {
        formGroup = new FormGroup({
            duration: new FormControl("")
        });
        formGroupDirective = new FormGroupDirective([], []);
        formGroupDirective.form = formGroup;
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule],
            declarations: [CourseDurationComponent, DurationPipe],
            providers: [
                {
                    provide: FormGroupDirective,
                    useValue: formGroupDirective
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CourseDurationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
