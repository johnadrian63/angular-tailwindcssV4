import { Component, inject, input, OnInit, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationVerticalService } from "./navigation.vertical.service";

@Component({
    selector: "app-navigation-vertical-menu-resolver",
    template: ""
})
export class NavigationVerticalResolver implements OnInit {
    public readonly menu = input.required<IMenuItem>();
    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);
    private readonly verticalMenuService = inject<NavigationVerticalService>(NavigationVerticalService);

    public ngOnInit(): void {
        this.verticalMenuService.handleData(this.vcr, this.menu());
    }
}
