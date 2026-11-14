import { Injectable, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../../navigation.model";
import { NavigationHorizontalCdkBaseResolverService } from "../../resolver/navigation.horizontal.cdk.base.resolver.service";
import { NavigationMenuResolver, NavigationMenuCustom, NavigationMenuSubNested, NavigationMenuSubSingle } from "../../../../navigation.menu.resolver.visitor";

@Injectable()
export class NavigationHorizontalCdkDropdownItemResolverService extends NavigationHorizontalCdkBaseResolverService {
    public override handle(vcr: ViewContainerRef, item: IMenuItem): void {
        let resolver: NavigationMenuResolver;

        if (item.renderer) {
            resolver = new NavigationMenuCustom(vcr, item);
        } else {
            if (item.children?.length) {
                resolver = new NavigationMenuSubNested(vcr, item);
            } else {
                resolver = new NavigationMenuSubSingle(vcr, item);
            }
        }

        this.navigationHorizontalCdkService.handle(resolver);
    }
}
