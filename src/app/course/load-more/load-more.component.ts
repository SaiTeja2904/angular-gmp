import { Component, ChangeDetectionStrategy, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "app-load-more",
    templateUrl: "./load-more.component.html",
    styleUrls: ["./load-more.component.less"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadMoreComponent {
    @Output() loadMoreCourses = new EventEmitter();

    constructor() {}

    loadMore() {
        this.loadMoreCourses.emit();
    }
}
