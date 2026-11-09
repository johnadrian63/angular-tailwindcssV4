import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-grid",
    styleUrl: "./grid.css",
    templateUrl: "./grid.html",
    imports: [RouterOutlet, RouterModule],
})
export class Grid {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
