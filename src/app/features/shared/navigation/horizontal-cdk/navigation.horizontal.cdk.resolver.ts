import { Component, inject, input, OnInit, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationHorizontalCdkService } from "./navigation.horizontal.cdk.service";

@Component({
    selector: "app-navigation-horizontal-cdk-resolver",
    template: ""
})
export class NavigationMenuResolver implements OnInit {
    public readonly menu = input.required<IMenuItem>();
    public readonly navigationHorizontalCdkService: NavigationHorizontalCdkService = inject<NavigationHorizontalCdkService>(NavigationHorizontalCdkService);

    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);

    public ngOnInit(): void {
        this.navigationHorizontalCdkService.handleData(this.vcr, this.menu());
    }
}
