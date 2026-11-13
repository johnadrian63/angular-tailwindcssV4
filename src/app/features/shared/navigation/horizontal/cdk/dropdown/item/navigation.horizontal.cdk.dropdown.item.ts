import { Component, Input, model, viewChild } from "@angular/core";
import { CdkMenuTrigger, CdkMenu, CdkMenuItem } from "@angular/cdk/menu";
import { NgClass } from "@angular/common";
import { PortalModule } from "@angular/cdk/portal";

import { IMenuItem } from "../../../../navigation.model";
import { NavigationHorizontalCdkBaseResolverService } from "../../resolver/navigation.horizontal.cdk.base.resolver.service";
import { NavigationHorizontalCdkDropdownItemResolverService } from "./navigation.horizontal.cdk.dropdown.item.resolver.service";
import { NavigationHorizontalCdkResolver } from "../../resolver/navigation.horizontal.cdk.resolver";

@Component({
    selector: "app-navigation-horizontal-cdk-dropdown-item",
    styleUrl: "./navigation.horizontal.cdk.dropdown.item.css",
    templateUrl: "./navigation.horizontal.cdk.dropdown.item.html",
    imports: [
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        NgClass,
        PortalModule,
        NavigationHorizontalCdkResolver
    ],
    providers: [
        NavigationHorizontalCdkDropdownItemResolverService,
        {
            provide: NavigationHorizontalCdkBaseResolverService,
            useExisting: NavigationHorizontalCdkDropdownItemResolverService
        }
    ],
})
export class NavigationHorizontalCdkDropdownItem {
    @Input() public classes: string = "";
    @Input() public menuClass: string = "";

    public readonly menu = model.required<IMenuItem>();
    public readonly menuItem = viewChild<CdkMenu>("menuItem");
}
