import { Component } from "@angular/core";
import { getRange } from "../../shared/util/range.generator";

@Component({
    imports: [],
    selector: "app-flex-justify",
    styleUrl: "./flex.justify.css",
    templateUrl: "./flex.justify.html",
})
export class FlexJustify {
    public getRange(range: number): number[] {
        return getRange(range);
    }
}
