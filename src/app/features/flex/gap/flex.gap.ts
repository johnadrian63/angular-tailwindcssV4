import { Component } from "@angular/core";

@Component({
    imports: [],
    selector: "app-flex-gap",
    styleUrl: "./flex.gap.css",
    templateUrl: "./flex.gap.html",
})
export class FlexGap {
    public getRange(range: number): any[] {
        return [...Array(range).keys()];
    }
}
