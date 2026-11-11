import { Component, Input, model, viewChild } from "@angular/core";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { IMenuItem } from "../navigation.model";
import { MatMenu, MatMenuModule } from "@angular/material/menu";

@Component({
    selector: "app-navigation-menu-dropdown-item",
    templateUrl: "./navigation.menu.dropdown.item.html",
    imports: [MatMenuModule]
})
export class NavigationMenuDropdownItem {
    public readonly menu = model.required<IMenuItem>();
    @Input() public classes: string = "";
    public readonly faAngleRightIcon = faAngleRight;
    public readonly menuItem = viewChild<MatMenu>("menuItem");
}
