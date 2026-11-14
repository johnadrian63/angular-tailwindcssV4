import { Injectable, signal, WritableSignal } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationMenuResolver } from "../../navigation.menu.resolver.visitor";
import { NavigationHorizontalResolverVisitor } from "./navigation.horizontal.menu.resolver.visitor";

@Injectable()
export abstract class NavigationHorizontalMenuService {

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(resolver: NavigationMenuResolver): void {
        resolver.accept(new NavigationHorizontalResolverVisitor());
    }
}
