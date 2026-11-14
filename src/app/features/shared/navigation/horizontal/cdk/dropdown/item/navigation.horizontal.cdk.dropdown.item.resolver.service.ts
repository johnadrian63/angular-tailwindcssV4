import { Injectable, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../../navigation.model";
import { NavigationHorizontalCdkBaseResolverService } from "../../resolver/navigation.horizontal.cdk.base.resolver.service";
import { NavigationMenuResolver, NavigationMenuCustom, NavigationMenuSubNested, NavigationMenuSubSingle } from "../../../../navigation.menu.resolver.visitor";

@Injectable()
export class NavigationHorizontalCdkDropdownItemResolverService extends NavigationHorizontalCdkBaseResolverService {
    public override handle(vcr: ViewContainerRef, menu: IMenuItem): void {
        let resolver: NavigationMenuResolver;

        if (menu.renderer) {
            resolver = new NavigationMenuCustom(vcr, menu);
        } else {
            if (menu.children?.length) {
                resolver = new NavigationMenuSubNested(vcr, menu);
            } else {
                resolver = new NavigationMenuSubSingle(vcr, menu);
            }
        }

        this.navigationHorizontalCdkService.handle(resolver);
    }
}
