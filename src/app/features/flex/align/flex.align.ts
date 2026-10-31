import { Component } from "@angular/core";

@Component({
    imports: [],
    selector: "app-flex-align",
    styleUrl: "./flex.align.css",
    templateUrl: "./flex.align.html",
})
export class FlexAlign {
    public getRange(range: number): any[] {
        return [...Array(range).keys()];
    }
}
