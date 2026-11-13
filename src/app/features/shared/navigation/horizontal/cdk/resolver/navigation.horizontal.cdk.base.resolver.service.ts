import { inject, Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationHorizontalCdkService } from "../navigation.horizontal.cdk.service";
import { IMenuItem, NavigationMenuCustom, NavigationMenuNested, NavigationMenuResolver, NavigationMenuSingle } from "../../../navigation.model";

@Injectable()
export abstract class NavigationHorizontalCdkBaseResolverService {
    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    protected readonly navigationHorizontalCdkService: NavigationHorizontalCdkService = inject<NavigationHorizontalCdkService>(NavigationHorizontalCdkService);

    public handle(vcr: ViewContainerRef, item: IMenuItem): void {
        let resolver: NavigationMenuResolver;

        if (item.renderer) {
            resolver = new NavigationMenuCustom(vcr, item);
        } else {

            if (item.children?.length) {
                resolver = new NavigationMenuNested(vcr, item);


            } else {
                resolver = new NavigationMenuSingle(vcr, item);
            }

        }
        this.navigationHorizontalCdkService.handle(resolver);
    }
}
