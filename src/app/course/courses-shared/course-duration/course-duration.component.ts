import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-course-duration',
  templateUrl: './course-duration.component.html',
  styleUrls: ['./course-duration.component.less']
})
export class CourseDurationComponent implements OnInit {
  duration: FormControl;

  constructor(private formGroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.duration = this.formGroupDirective.control.get(
      'duration'
    ) as FormControl;
  }
}
