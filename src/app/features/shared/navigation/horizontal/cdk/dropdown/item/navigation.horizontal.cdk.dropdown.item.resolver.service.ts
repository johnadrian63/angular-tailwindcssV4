import { Injectable, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../../navigation.model";
import { NavigationHorizontalCdkBaseResolverService } from "../../resolver/navigation.horizontal.cdk.base.resolver.service";
import { NavigationResolver, NavigationSubSingle, NavigationSubNested, NavigationCustom } from "../../resolver/navigation.horizontal.cdk.resolver.model";

@Injectable()
export class NavigationHorizontalCdkDropdownItemResolverService extends NavigationHorizontalCdkBaseResolverService {
    public override handle(vcr: ViewContainerRef, item: IMenuItem): void {
        let resolver: NavigationResolver;

        if (item.renderer) {
            resolver = new NavigationCustom(vcr, item);
        } else {
            if (item.children?.length) {
                resolver = new NavigationSubNested(vcr, item);
            } else {
                resolver = new NavigationSubSingle(vcr, item);
            }
        }

        this.navigationHorizontalCdkService.handle(resolver);
    }
}
