import { Component, inject, input, OnInit, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../navigation.model";
import { NavigationHorizontalCdkBaseResolverService } from "./navigation.horizontal.cdk.base.resolver.service";

@Component({
    selector: "app-navigation-horizontal-cdk-resolver",
    template: ""
})
export class NavigationHorizontalCdkResolver implements OnInit {
    public readonly menu = input.required<IMenuItem>();
    public readonly resolverService: NavigationHorizontalCdkBaseResolverService = inject<NavigationHorizontalCdkBaseResolverService>(NavigationHorizontalCdkBaseResolverService);

    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    public ngOnInit(): void {
        this.resolverService.handle(this.vcr, this.menu());
    }
}
