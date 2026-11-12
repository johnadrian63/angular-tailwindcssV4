import { NgClass } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { Component, Input, model } from "@angular/core";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenuItem } from "../../navigation.model";
import { NavigationMenuDropdownItem } from "./item/navigation.menu.dropdown.item";

@Component({
    selector: "app-navigation-menu-dropdown",
    templateUrl: "./navigation.menu.dropdown.html",
    imports: [
        NgClass,
        MatMenuModule,
        NavigationMenuDropdownItem,
        FaIconComponent
    ]
})
export class NavigationMenuDropdown {
    @Input() public classes: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly expandIcon = faAngleDown;
}
