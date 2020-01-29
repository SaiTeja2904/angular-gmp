import { Component, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";

@Component({
    selector: "app-search-course",
    templateUrl: "./search-course.component.html",
    styleUrls: ["./search-course.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCourseComponent {
    public search: string;
    @Output() public courseSearched = new EventEmitter<string>();

    public onCourseSearched() {
        this.courseSearched.emit(this.search);
    }
}
