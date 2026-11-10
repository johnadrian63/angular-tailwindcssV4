import { NgClass } from "@angular/common";
import { Component, inject, model } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { IMenuItem } from "../navigation.model";

@Component({
    selector: "app-navigation-link",
    templateUrl: "./navigation.link.html",
    imports: [RouterLink, NgClass]
})
export class NavigationLink {
    public readonly menu = model.required<IMenuItem>();
    public classes: string = "";
    public readonly faAngleRightIcon = faAngleRight;
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
