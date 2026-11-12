import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { Component, Input, model, viewChild } from "@angular/core";

import { IMenuItem } from "../../../navigation.model";

@Component({
    selector: "app-navigation-menu-dropdown-item",
    templateUrl: "./navigation.menu.dropdown.item.html",
    imports: [MatMenuModule]
})
export class NavigationMenuDropdownItem {
    @Input() public classes: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly menuItem = viewChild<MatMenu>("menuItem");
}
