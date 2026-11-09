import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-material",
    styleUrl: "./material.css",
    templateUrl: "./material.html",
    imports: [RouterOutlet, RouterModule],
})
export class Material {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
