import { Component, inject, model } from "@angular/core";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { IMenuItem } from "../../navigation.menu.model";
import { NavigationVerticalMenuService } from "../navigation.menu.vertical.service";


@Component({
    selector: "app-navigation-vertical-menu-expand",
    templateUrl: "./navigation.vertical.menu.expand.html",
    styleUrl: "./navigation.vertical.menu.expand.css",
    imports: [FaIconComponent]
})
export class NavigationVerticalMenuExpand {
    public readonly menu = model.required<IMenuItem>();
    public readonly faAngleRightIcon = faAngleRight;
    public readonly verticalMenuService = inject<NavigationVerticalMenuService>(NavigationVerticalMenuService);

    public expand(parent: IMenuItem, children: IMenuItem[]): void {
        this.verticalMenuService.setMenu(parent, children);
    }
}
