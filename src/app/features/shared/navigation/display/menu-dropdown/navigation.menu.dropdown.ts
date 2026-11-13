import { NgClass } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { Component, Input, model } from "@angular/core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationDisplay } from "../navigation.display";
import { NavigationDisplayMenuDropdownItem } from "./item/navigation.display.menu.dropdown.item";

@Component({
    selector: "app-navigation-menu-dropdown",
    templateUrl: "./navigation.menu.dropdown.html",
    imports: [
        NgClass,
        MatMenuModule,
        NavigationDisplayMenuDropdownItem,
        FaIconComponent
    ]
})
export class NavigationMenuDropdown extends NavigationDisplay {
    @Input() public override classes: string = "";

    public readonly expandIcon = faAngleDown;
}
