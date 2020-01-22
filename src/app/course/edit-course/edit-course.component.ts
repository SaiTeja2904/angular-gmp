import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Course } from '../_models/course';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.less']
})
export class EditCourseComponent implements OnInit {
  courseForm: FormGroup;
  title: FormControl;
  description: FormControl;
  duration: FormControl;
  date: FormControl;
  authors: FormControl;
  courseId: number;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService,
    private datePipe: DatePipe
  ) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.courseId = id;
    });
    const course: Course = this.courseService.getItemById(this.courseId);
    if (course) {
      this.title = new FormControl(course.title, Validators.required);
      this.description = new FormControl(
        course.description,
        Validators.required
      );
      this.duration = new FormControl(course.duration, Validators.required);
      this.date = new FormControl(
        this.datePipe.transform(course.creationDate, 'yyyy-MM-dd'),
        Validators.required
      );
      this.authors = new FormControl(course.authors, Validators.required);
      this.courseForm = new FormGroup({
        title: this.title,
        description: this.description,
        duration: this.duration,
        creationDate: this.date,
        authors: this.authors
      });
    }
  }

  submitCourse() {
    const formValue = this.courseForm.value;
    const newCourse: Course = {
      ...formValue,
      id: this.courseId,
      creationDate: new Date(Date.parse(formValue.creationDate)),
      authors: [formValue.authors]
    };
    this.courseService.updateItem(this.courseId, newCourse);
    this.router.navigate(['/courses']);
  }

  cancel() {
    if (!this.courseForm.dirty) {
      this.router.navigate(['/courses']);
      return;
    }
    if (confirm('Do you really want to cancel course creation?')) {
      this.router.navigate(['/courses']);
    }
  }
}
