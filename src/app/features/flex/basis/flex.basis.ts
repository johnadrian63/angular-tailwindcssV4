import { Component } from "@angular/core";

@Component({
    imports: [],
    selector: "app-flex-basis",
    styleUrl: "./flex.basis.css",
    templateUrl: "./flex.basis.html",
})
export class FlexBasis {
    public getRange(range: number): any[] {
        return [...Array(range).keys()];
    }
}
