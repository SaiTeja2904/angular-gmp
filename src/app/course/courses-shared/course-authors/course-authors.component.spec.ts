import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseAuthorsComponent } from './course-authors.component';
import {
  ReactiveFormsModule,
  FormGroupDirective,
  FormGroup,
  FormControl
} from '@angular/forms';

describe('CourseAuthorsComponent', () => {
  let component: CourseAuthorsComponent;
  let fixture: ComponentFixture<CourseAuthorsComponent>;
  let formGroup: FormGroup;
  let formGroupDirective: FormGroupDirective;

  beforeEach(async(() => {
    formGroup = new FormGroup({
      authors: new FormControl('')
    });
    formGroupDirective = new FormGroupDirective([], []);
    formGroupDirective.form = formGroup;
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [CourseAuthorsComponent],
      providers: [
        {
          provide: FormGroupDirective,
          useValue: formGroupDirective
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
