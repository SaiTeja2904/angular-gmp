import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnChanges {
  @Input() path = [];
  completePath = '';
  constructor() {}

  ngOnChanges() {
    this.completePath = this.path.join('/ ');
    console.log(this.completePath);
  }
}
