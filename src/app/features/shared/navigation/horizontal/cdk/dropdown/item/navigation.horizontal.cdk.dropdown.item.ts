import { Component, Input, model, viewChild } from "@angular/core";
import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import { NgClass } from "@angular/common";

import { IMenuItem } from "../../../../navigation.model";
import { NavigationHorizontalCdkDropdownResolver } from "../navigation.horizontal.cdk.dropdown.resolver";

@Component({
    selector: "app-navigation-horizontal-cdk-dropdown-item",
    styleUrl: "./navigation.horizontal.cdk.dropdown.item.css",
    templateUrl: "./navigation.horizontal.cdk.dropdown.item.html",
    imports: [
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        NgClass,
        NavigationHorizontalCdkDropdownResolver
    ],
})
export class NavigationHorizontalCdkDropdownItem {
    @Input() public classes: string = "";
    @Input() public menuClass: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly menuItem = viewChild<CdkMenu>("menuItem");
}
