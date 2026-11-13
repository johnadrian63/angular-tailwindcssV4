import { Injectable, signal, WritableSignal } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationHorizontalCdkResolverVisitor } from "./navigation.horizontal.cdk.resolver.visitor";
import { NavigationResolver } from "./resolver/navigation.horizontal.cdk.resolver.model";


@Injectable()
export abstract class NavigationHorizontalCdkService {
    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(resolver: NavigationResolver): void {
        resolver.accept(new NavigationHorizontalCdkResolverVisitor());
    }
}
