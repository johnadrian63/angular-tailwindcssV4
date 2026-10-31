import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
    imports: [RouterModule],
    selector: "app-flex-parent-nav",
    styleUrl: "./flex.parent.nav.css",
    templateUrl: "./flex.parent.nav.html",
})
export class FlexParentNav {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
