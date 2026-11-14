import { Injectable, signal, WritableSignal } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationMenuResolver } from "../../navigation.menu.resolver.visitor";
import { NavigationHorizontalCdkResolverVisitor } from "./navigation.horizontal.cdk.resolver.visitor";

@Injectable()
export abstract class NavigationHorizontalCdkService {
    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(resolver: NavigationMenuResolver): void {
        resolver.accept(new NavigationHorizontalCdkResolverVisitor());
    }
}
