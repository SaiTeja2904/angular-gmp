import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDescriptionComponent } from './course-description.component';
import {
  ReactiveFormsModule,
  FormGroupDirective,
  FormGroup,
  FormControl
} from '@angular/forms';

describe('CourseDescriptionComponent', () => {
  let component: CourseDescriptionComponent;
  let fixture: ComponentFixture<CourseDescriptionComponent>;
  let formGroup: FormGroup;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async(() => {
    formGroup = new FormGroup({
      description: new FormControl('')
    });
    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = formGroup;
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CourseDescriptionComponent],
      providers: [
        {
          provide: FormGroupDirective,
          useValue: formGroupDirective
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
