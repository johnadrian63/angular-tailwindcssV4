import { inject, Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem } from "../../../navigation.model";
import { NavigationHorizontalCdkService } from "../navigation.horizontal.cdk.service";
import { NavigationMenuResolver, NavigationMenuCustom, NavigationMenuNested, NavigationMenuSingle } from "../../../navigation.menu.resolver.visitor";
import { NavigationHorizontalCdkResolverVisitor } from "../navigation.horizontal.cdk.resolver.visitor";

@Injectable()
export abstract class NavigationHorizontalCdkBaseResolverService {
    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    protected readonly navigationHorizontalCdkService: NavigationHorizontalCdkService = inject<NavigationHorizontalCdkService>(NavigationHorizontalCdkService);

    public handle(vcr: ViewContainerRef, item: IMenuItem): void {
        let resolver: NavigationMenuResolver;

        if (item.handler) {
            resolver = new NavigationMenuCustom();
        } else {
            if (item.children?.length) {
                resolver = new NavigationMenuNested();
            } else {
                resolver = new NavigationMenuSingle();
            }
        }

        const handler = resolver.accept(new NavigationHorizontalCdkResolverVisitor(item));

        this.navigationHorizontalCdkService.handle(vcr, handler);
    }
}
