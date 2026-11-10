import { Component, inject, model } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { IMenuItem } from "../../navigation.menu.model";

@Component({
    selector: "app-navigation-vertical-menu-link",
    templateUrl: "./navigation.vertical.menu.link.html",
    styleUrl: "./navigation.vertical.menu.link.css",
    imports: [RouterLink]
})
export class NavigationVerticalMenuLink {
    public readonly menu = model.required<IMenuItem>();
    public readonly faAngleRightIcon = faAngleRight;
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
