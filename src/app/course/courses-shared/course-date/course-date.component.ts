import { Component, OnInit, forwardRef } from "@angular/core";
import { FormControl, FormGroupDirective, ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: "app-course-date",
    templateUrl: "./course-date.component.html",
    styleUrls: ["./course-date.component.less"],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CourseDateComponent),
            multi: true
        }
    ]
})
export class CourseDateComponent implements OnInit, ControlValueAccessor {
    date: FormControl;
    dateValue: Date;
    onChange: () => void;
    onTouched: () => void;
    disabled: boolean;

    constructor(private formGroupDirective: FormGroupDirective) {}

    ngOnInit() {
        this.date = this.formGroupDirective.control.get("date") as FormControl;
    }

    writeValue(value: Date): void {
        this.dateValue = value;
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
