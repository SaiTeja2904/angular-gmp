import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "app-search-course",
    templateUrl: "./search-course.component.html",
    styleUrls: ["./search-course.component.less"]
})
export class SearchCourseComponent {
    public search: string;
    @Output() public courseSearched = new EventEmitter<string>();

    public onCourseSearched() {
        this.courseSearched.emit(this.search);
    }
}
