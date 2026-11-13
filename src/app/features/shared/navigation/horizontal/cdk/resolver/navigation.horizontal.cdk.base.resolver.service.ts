import { inject, Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem } from "../../../navigation.model";
import { NavigationHorizontalCdkService } from "../navigation.horizontal.cdk.service";
import { NavigationResolver, NavigationNested, NavigationSingle, NavigationCustom } from "./navigation.horizontal.cdk.resolver.model";

@Injectable()
export abstract class NavigationHorizontalCdkBaseResolverService {
    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    protected readonly navigationHorizontalCdkService: NavigationHorizontalCdkService = inject<NavigationHorizontalCdkService>(NavigationHorizontalCdkService);

    public handle(vcr: ViewContainerRef, item: IMenuItem): void {
        let resolver: NavigationResolver;

        if (item.renderer) {
            resolver = new NavigationCustom(vcr, item);
        } else {

            if (item.children?.length) {
                resolver = new NavigationNested(vcr, item);


            } else {
                resolver = new NavigationSingle(vcr, item);
            }

        }
        this.navigationHorizontalCdkService.handle(resolver);
    }
}
