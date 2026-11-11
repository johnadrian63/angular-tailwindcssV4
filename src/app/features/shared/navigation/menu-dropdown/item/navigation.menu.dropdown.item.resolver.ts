import { Component, inject, input, OnInit, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationMenuDropdownItemService } from "./navigation.menu.dropdown.service";
import { NavigationHorizontalService } from "../../horizontal/navigation.horizontal.service";

@Component({
    selector: "app-navigation-horizontal-resolver",
    template: ""
})
export class NavigationMenuDropdownItemResolver implements OnInit {
    public readonly menu = input.required<IMenuItem>();
    public readonly navigationMenuDropdownItemService: NavigationMenuDropdownItemService = inject<NavigationMenuDropdownItemService>(NavigationHorizontalService);

    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);

    public ngOnInit(): void {
        this.navigationMenuDropdownItemService.handleData(this.vcr, this.menu());
    }
}
