import { Component, Input, model, viewChild } from "@angular/core";

import { IMenuItem } from "../../../../navigation.model";
import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import { NavigationHorizontalCdkDropdownResolver } from "../navigation.horizontal.cdk.dropdown.resolver";

@Component({
    selector: "app-navigation-horizontal-cdk-dropdown-item",
    styleUrl: "./navigation.horizontal.cdk.dropdown.item.css",
    templateUrl: "./navigation.horizontal.cdk.dropdown.item.html",
    imports: [
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        NavigationHorizontalCdkDropdownResolver
    ],
})
export class NavigationHorizontalCdkDropdownItem {
    @Input() public classes: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly menuItem = viewChild<CdkMenu>("menuItem");
}
