import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem, INavigationHandlerService } from "../../navigation.model";
import { NavigationDisplayHandler } from "../../navigation.display.handler";
import { NavigationHorizontalCdkDisplayHandlerVisitor } from "./navigation.horizontal.menu.display.handler";

@Injectable()
export abstract class NavigationHorizontalMenuService implements INavigationHandlerService {
    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(vcr: ViewContainerRef, resolver: NavigationDisplayHandler): void {
        resolver.accept(new NavigationHorizontalCdkDisplayHandlerVisitor());
    }
}
