import { Component } from "@angular/core";

@Component({
    imports: [],
    selector: "app-grid-flow",
    styleUrl: "./grid.flow.css",
    templateUrl: "./grid.flow.html",
})
export class GridFlow {
    public getRange(range: number): any[] {
        return [...Array(range).keys()];
    }
}
