import { Component } from "@angular/core";
import { getRange } from "../../shared/util/range.generator";

@Component({
    imports: [],
    selector: "app-flex-align",
    styleUrl: "./flex.align.css",
    templateUrl: "./flex.align.html",
})
export class FlexAlign {
    public getRange(range: number): number[] {
        return getRange(range);
    }
}
