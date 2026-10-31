import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    imports: [RouterOutlet, RouterModule],
    selector: "app-grid",
    styleUrl: "./grid.css",
    templateUrl: "./grid.html",
})
export class Grid {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
