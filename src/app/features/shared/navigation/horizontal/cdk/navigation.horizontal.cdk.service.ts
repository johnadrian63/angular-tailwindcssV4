import { Injectable, signal, WritableSignal } from "@angular/core";

import { IMenuItem, NavigationMenuResolver } from "../../navigation.model";
import { NavigationHorizontalCdkResolverVisitor } from "./navigation.horizontal.cdk.resolver.visitor";

@Injectable()
export abstract class NavigationHorizontalCdkService {
    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(resolver: NavigationMenuResolver): void {
        resolver.accept(new NavigationHorizontalCdkResolverVisitor());
    }
}
