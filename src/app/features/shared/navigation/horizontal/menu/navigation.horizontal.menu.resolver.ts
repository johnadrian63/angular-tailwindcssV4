import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationHorizontalMenuService } from "./navigation.horizontal.menu.service";
import { NavigationMenuResolver, NavigationMenuNested, NavigationMenuSingle } from "../../navigation.menu.resolver.visitor";

@Component({
    selector: "app-navigation-horizontal-menu-resolver",
    template: ""
})
export class NavigationHorizontalMenuResolver {
    public readonly menu = input.required<IMenuItem>();
    public readonly navigationHorizontalMenuService: NavigationHorizontalMenuService = inject<NavigationHorizontalMenuService>(NavigationHorizontalMenuService);

    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);

    constructor() {
        effect(() => {
            const menu = this.menu();

            let resolver: NavigationMenuResolver;

            if (menu.children?.length) {
                resolver = new NavigationMenuNested(this.vcr, menu);
            } else {
                resolver = new NavigationMenuSingle(this.vcr, menu);
            }

            this.navigationHorizontalMenuService.handle(resolver);
        });
    }
}
