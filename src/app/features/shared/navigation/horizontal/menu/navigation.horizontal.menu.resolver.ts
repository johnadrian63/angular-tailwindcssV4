import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationHorizontalMenuService } from "./navigation.horizontal.menu.service";
import { NavigationMenuResolver, NavigationMenuNested, NavigationMenuSingle } from "../../navigation.menu.resolver.visitor";
import { NavigationHorizontalResolverVisitor } from "./navigation.horizontal.menu.resolver.visitor";

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
                resolver = new NavigationMenuNested();
            } else {
                resolver = new NavigationMenuSingle();
            }

            const handler = resolver.accept(new NavigationHorizontalResolverVisitor(menu));

            this.navigationHorizontalMenuService.handle(this.vcr, handler);
        });
    }
}
