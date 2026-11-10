import { Component, inject, input, model } from "@angular/core";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { IVerticalMenuItem } from "../vertical.menu.model";

@Component({
    selector: "app-vertical-menu-link",
    templateUrl: "./vertical.menu.link.html",
    styleUrl: "./vertical.menu.link.css",
    imports: [RouterLink]
})
export class VerticalMenuLink {
    public readonly menu = model.required<IVerticalMenuItem>();
    public readonly faAngleRightIcon = faAngleRight;
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}