import { Component } from "@angular/core";

@Component({
    imports: [],
    selector: "app-flex-basic",
    styleUrl: "./flex.basic.css",
    templateUrl: "./flex.basic.html",
})
export class FlexBasic {
    public getRange(range: number): any[] {
        return [...Array(range).keys()];
    }
}
