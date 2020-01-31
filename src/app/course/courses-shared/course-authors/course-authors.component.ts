import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroupDirective } from "@angular/forms";
// import { CourseAuthor } from 'src/app/models/course';
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/store/state/app.state";
// import { courseAuthorsSelector } from 'src/app/store/selectors/courses';
import { IDropdownSettings } from "ng-multiselect-dropdown";
import { courseAuthorsSelector } from 'src/app/store/selectors/courses.selectors';

@Component({
    selector: "app-course-authors",
    templateUrl: "./course-authors.component.html",
    styleUrls: ["./course-authors.component.less"]
})
export class CourseAuthorsComponent implements OnInit {
    authors: FormControl;
    authorsList$: Observable<any[]>;
    dropdownSettings: IDropdownSettings;

    constructor(private formGroupDirective: FormGroupDirective, private store: Store<AppState>) {}

    ngOnInit() {
        this.authors = this.formGroupDirective.control.get("authors") as FormControl;
        // this.authorsList$ = of([{ id: 1, name: "A" }]);
        this.authorsList$ = this.store.select(courseAuthorsSelector);
        this.dropdownSettings = {
            singleSelection: false,
            idField: "id",
            enableCheckAll: false,
            searchPlaceholderText: "Start typing",
            textField: "name",
            selectAllText: "Select All",
            unSelectAllText: "UnSelect All",
            itemsShowLimit: 5,
            allowSearchFilter: true
        };
    }
}
