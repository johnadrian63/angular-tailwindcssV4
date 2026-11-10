import { Component, inject, input, OnInit, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationHorizontalService } from "./navigation.horizontal.service";

@Component({
    selector: "app-navigation-horizontal-resolver",
    template: ""
})
export class NavigationMenuResolver implements OnInit {
    public readonly menu = input.required<IMenuItem>();
    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);
    public readonly navigationMenuService: NavigationHorizontalService = inject<NavigationHorizontalService>(NavigationHorizontalService);

    public ngOnInit(): void {
        this.navigationMenuService.handleData(this.vcr, this.menu());
    }
}
