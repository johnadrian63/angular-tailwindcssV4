import { Injectable, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../../navigation.model";
import { NavigationHorizontalCdkResolverVisitor } from "../../navigation.horizontal.cdk.resolver.visitor";
import { NavigationHorizontalCdkBaseResolverService } from "../../resolver/navigation.horizontal.cdk.base.resolver.service";
import { NavigationMenuResolver, NavigationMenuCustom, NavigationMenuSubNested, NavigationMenuSubSingle } from "../../../../navigation.menu.resolver.visitor";

@Injectable()
export class NavigationHorizontalCdkDropdownItemResolverService extends NavigationHorizontalCdkBaseResolverService {
    public override handle(vcr: ViewContainerRef, menu: IMenuItem): void {
        let resolver: NavigationMenuResolver;

        if (menu.handler) {
            resolver = new NavigationMenuCustom();
        } else {
            if (menu.children?.length) {
                resolver = new NavigationMenuSubNested();
            } else {
                resolver = new NavigationMenuSubSingle();
            }
        }

        const handler = resolver.accept(new NavigationHorizontalCdkResolverVisitor(menu));

        this.navigationHorizontalCdkService.handle(vcr, handler);
    }
}
