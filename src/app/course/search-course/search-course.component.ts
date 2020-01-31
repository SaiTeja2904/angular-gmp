import { Component, Output, EventEmitter, ChangeDetectionStrategy, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { filter, debounce } from "rxjs/operators";
import { timer } from "rxjs";

@Component({
    selector: "app-search-course",
    templateUrl: "./search-course.component.html",
    styleUrls: ["./search-course.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchCourseComponent implements OnInit {
    searchControl: FormControl;
    @Output() public courseSearched = new EventEmitter<string>();

    ngOnInit() {
        this.searchControl = new FormControl("");
        this.searchControl.valueChanges
            .pipe(
                filter((searchText: string) => searchText.length === 0 || searchText.length > 2),
                debounce(() => timer(500))
            )
            .subscribe((searchInput: string) => this.courseSearched.emit(searchInput.trim()));
    }
}
