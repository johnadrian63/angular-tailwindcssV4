import { Component } from "@angular/core";

@Component({
    imports: [],
    selector: "app-flex-justify",
    styleUrl: "./flex.justify.css",
    templateUrl: "./flex.justify.html",
})
export class FlexJustify {
    public getRange(range: number): any[] {
        return [...Array(range).keys()];
    }
}
