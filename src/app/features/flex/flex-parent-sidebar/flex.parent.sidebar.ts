import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
    imports: [RouterModule],
    selector: "app-flex.parent.sidebar",
    styleUrl: "./flex.parent.sidebar.css",
    templateUrl: "./flex.parent.sidebar.html",
})
export class FlexParentSidebar {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
