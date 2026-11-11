import { Component, Input, model, output, viewChild } from "@angular/core";
import { NgClass } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenuItem } from "../../../navigation.model";
import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";

@Component({
    selector: "app-navigation-horizontal-cdk-dropdown-item",
    styleUrl: "./navigation.horizontal.cdk.dropdown.item.css",
    templateUrl: "./navigation.horizontal.cdk.dropdown.item.html",
    imports: [
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem
    ],
})
export class NavigationHorizontalCdkDropdownItem {
    @Input() public classes: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly menuItem = viewChild<CdkMenu>("menuItem");
}
