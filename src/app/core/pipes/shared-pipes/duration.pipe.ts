import { Pipe, PipeTransform } from "@angular/core";
import { timeConvert } from "../../../shared-utils/date-time.utils";

@Pipe({
    name: "duration"
})
export class DurationPipe implements PipeTransform {
    transform(value: number): string {
        return value ? timeConvert(value) : "-";
    }
}
