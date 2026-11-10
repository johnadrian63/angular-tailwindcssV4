import { Component, inject, input, OnInit, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.menu.model";
import { NavigationVerticalMenuService } from "./navigation.menu.vertical.service";


@Component({
    selector: "app-navigation-vertical-menu-resolver",
    template: ""
})
export class NavigationVerticalMenuResolver implements OnInit {
    public readonly menu = input.required<IMenuItem>();
    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);
    private readonly verticalMenuService = inject<NavigationVerticalMenuService>(NavigationVerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.handleData(this.vcr, this.menu());
    }
}
