import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-design-patterns",
    styleUrl: "./design.patterns.css",
    templateUrl: "./design.patterns.html",
    imports: [RouterOutlet, RouterModule],
})
export class DesignPatterns {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
