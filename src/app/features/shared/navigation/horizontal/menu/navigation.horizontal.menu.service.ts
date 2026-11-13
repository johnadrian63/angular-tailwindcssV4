import { Injectable, signal, WritableSignal } from "@angular/core";

import { IMenuItem, NavigationMenuResolver } from "../../navigation.model";
import { NavigationHorizontalResolverVisitor } from "./navigation.horizontal.menu.resolver.visitor";

@Injectable()
export abstract class NavigationHorizontalMenuService {

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(resolver: NavigationMenuResolver): void {
        resolver.accept(new NavigationHorizontalResolverVisitor());
    }
}
