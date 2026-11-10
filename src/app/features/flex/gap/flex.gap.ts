import { Component } from "@angular/core";
import { getRange } from "../../shared/util/range.generator";

@Component({
    imports: [],
    selector: "app-flex-gap",
    styleUrl: "./flex.gap.css",
    templateUrl: "./flex.gap.html",
})
export class FlexGap {
    public getRange(range: number): number[] {
        return getRange(range);
    }
}
