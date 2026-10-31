import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
    imports: [RouterModule],
    selector: "app-flex-child-nav",
    styleUrl: "./flex.child.nav.css",
    templateUrl: "./flex.child.nav.html",
})
export class FlexChildNav {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
