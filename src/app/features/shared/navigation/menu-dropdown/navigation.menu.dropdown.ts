import { NgClass } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { Component, Input, model } from "@angular/core";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { IMenuItem } from "../navigation.model";
import { NavigationMenuDropdownItem } from "./navigation.menu.dropdown.item";

@Component({
    selector: "app-navigation-menu-dropdown",
    templateUrl: "./navigation.menu.dropdown.html",
    imports: [NgClass, MatMenuModule, NavigationMenuDropdownItem]
})
export class NavigationMenuDropdown {
    public readonly menu = model.required<IMenuItem>();
    @Input() public classes: string = "";
    public readonly faAngleRightIcon = faAngleRight;
}
