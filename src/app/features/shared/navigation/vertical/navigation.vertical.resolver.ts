import { Component, effect, inject, input, ViewContainerRef } from "@angular/core";

import { NavigationVerticalService } from "./navigation.vertical.service";
import { IMenuItem, NavigationMenuNested, NavigationMenuResolver, NavigationMenuSingle } from "../navigation.model";

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
                resolver = new NavigationMenuNested(this.vcr, menu);
            } else {
                resolver = new NavigationMenuSingle(this.vcr, menu);
            }

            console.log(">>>", this.vcr);
            this.verticalMenuService.handle(resolver);
        });
    }
}
