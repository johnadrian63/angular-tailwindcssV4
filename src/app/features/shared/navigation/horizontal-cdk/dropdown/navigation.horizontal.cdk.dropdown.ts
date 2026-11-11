import { Component, model, output } from "@angular/core";
import { NgClass } from "@angular/common";
import { CdkMenuTrigger } from "@angular/cdk/menu";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenuItem } from "../../navigation.model";
import { NavigationHorizontalCdkDropdownItem } from "./item/navigation.horizontal.cdk.dropdown.item";

@Component({
    selector: "app-navigation-horizontal-cdk-dropdown",
    styleUrl: "./navigation.horizontal.cdk.dropdown.css",
    templateUrl: "./navigation.horizontal.cdk.dropdown.html",
    imports: [CdkMenuTrigger, NgClass, FaIconComponent, NavigationHorizontalCdkDropdownItem]
})
export class NavigationHorizontalCdkDropdown {
    public readonly menu = model.required<IMenuItem>();
    public readonly expandIcon = faAngleDown;

    public classes: string = "";
}
