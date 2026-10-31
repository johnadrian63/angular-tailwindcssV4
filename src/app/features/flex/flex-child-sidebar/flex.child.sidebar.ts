import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
    imports: [RouterModule],
    selector: "app-flex-child-sidebar",
    styleUrl: "./flex.child.sidebar.css",
    templateUrl: "./flex.child.sidebar.html",
})
export class FlexChildSidebar {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
