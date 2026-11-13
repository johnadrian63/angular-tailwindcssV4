import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: "app-ng",
    styleUrl: "./ng.css",
    templateUrl: "./ng.html",
    imports: [RouterModule, RouterOutlet],
})
export class Ng {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

}
