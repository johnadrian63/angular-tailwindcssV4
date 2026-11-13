import { Component, effect, inject, viewChild, ViewContainerRef } from "@angular/core";
import { ActivatedRoute, RouterModule, RouterOutlet } from "@angular/router";


@Component({
    selector: "app-material-template-portal",
    styleUrl: "./material.template.portal.css",
    templateUrl: "./material.template.portal.html",
    imports: [RouterOutlet, RouterModule]
})
export class MaterialTemplatePortal {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

}
