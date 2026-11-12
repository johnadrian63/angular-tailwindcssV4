import { Component, inject, input, OnInit, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationHorizontalService } from "./navigation.horizontal.service";

@Component({
    selector: "app-navigation-horizontal-resolver",
    template: ""
})
export class NavigationHorizontalResolver implements OnInit {
    public readonly menu = input.required<IMenuItem>();
    public readonly navigationMenuService: NavigationHorizontalService = inject<NavigationHorizontalService>(NavigationHorizontalService);

    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);

    public ngOnInit(): void {
        this.navigationMenuService.handle(this.vcr, this.menu());
    }
}
