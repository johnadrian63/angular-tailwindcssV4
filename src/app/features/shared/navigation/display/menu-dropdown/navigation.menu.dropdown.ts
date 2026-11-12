import { NgClass } from "@angular/common";
import { MatMenuModule } from "@angular/material/menu";
import { Component, Input, model } from "@angular/core";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { NavigationMenuDropdownItem } from "./item/navigation.menu.dropdown.item";
import { NavigationDisplay } from "../navigation.display";
import { INavigationDisplayVisitor } from "../navigation.display.model";

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
export class NavigationMenuDropdown extends NavigationDisplay {
    @Input() public override classes: string = "";

    public readonly expandIcon = faAngleDown;

    public override accept<T>(visitor: INavigationDisplayVisitor<T>): T {
        return visitor.visitDropdown(this);
    }
}
