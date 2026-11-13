import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../navigation.model";
import { NavigationHorizontalCdkBaseResolverService } from "./navigation.horizontal.cdk.base.resolver.service";

@Component({
    selector: "app-navigation-horizontal-cdk-resolver",
    template: ""
})
export class NavigationHorizontalCdkResolver {
    public readonly menu = input.required<IMenuItem>();
    public readonly resolverService: NavigationHorizontalCdkBaseResolverService = inject<NavigationHorizontalCdkBaseResolverService>(NavigationHorizontalCdkBaseResolverService);

    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    constructor() {
        effect(() => {
            this.resolverService.handle(this.vcr, this.menu());
        });
    }
}
