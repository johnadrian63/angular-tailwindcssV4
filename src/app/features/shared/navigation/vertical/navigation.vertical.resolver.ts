import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationVerticalService } from "./navigation.vertical.service";
import { NavigationMenuResolver, NavigationMenuNested, NavigationMenuSingle } from "../navigation.menu.resolver.visitor";
import { NavigationVerticalResolverVisitor } from "./navigation.vertical.resolver.visitor";

@Component({
    selector: "app-navigation-vertical-menu-resolver",
    template: ""
})
export class NavigationVerticalResolver {
    public readonly menu = input.required<IMenuItem>();

    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);
    private readonly verticalMenuService = inject<NavigationVerticalService>(NavigationVerticalService);

    constructor() {
        effect(() => {
            const menu = this.menu();

            let resolver: NavigationMenuResolver;

            if (menu.children?.length) {
                resolver = new NavigationMenuNested();
            } else {
                resolver = new NavigationMenuSingle();
            }

            const visitor = new NavigationVerticalResolverVisitor(menu);

            const handler = resolver.accept(visitor);

            this.verticalMenuService.handle(this.vcr, handler);
        });
    }
}
