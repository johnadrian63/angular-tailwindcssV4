import { CdkMenuTrigger } from "@angular/cdk/menu";
import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import { NavigationDisplay } from "../../../../../shared/navigation/display/navigation.display";
import { NavigationHorizontalCdkDropdownItem } from "../../../../../shared/navigation/horizontal/cdk/dropdown/item/navigation.horizontal.cdk.dropdown.item";

@Component({
    selector: "app-example-responsive-navigation-horizontal-profile-dropdown",
    styleUrl: "./example.responsive.navigation.horizontal.profile.dropdown.css",
    templateUrl: "./example.responsive.navigation.horizontal.profile.dropdown.html",
    imports: [
        CdkMenuTrigger,
        NgClass,
        FaIconComponent,
        NavigationHorizontalCdkDropdownItem,
    ],
})
export class ExampleResponsiveNavigationHorizontalProfileDropdown extends NavigationDisplay {
    public expandIcon = faUser;

    public menuClass: string = "";
}