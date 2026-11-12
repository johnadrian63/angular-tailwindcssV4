import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { Component, Input, model, viewChild } from "@angular/core";

import { IMenuItem } from "../../../navigation.model";

@Component({
    selector: "app-navigation-display-menu-dropdown-item",
    templateUrl: "./navigation.display.menu.dropdown.item.html",
    imports: [MatMenuModule]
})
export class NavigationDisplayMenuDropdownItem {
    @Input() public classes: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly menuItem = viewChild<MatMenu>("menuItem");
}
