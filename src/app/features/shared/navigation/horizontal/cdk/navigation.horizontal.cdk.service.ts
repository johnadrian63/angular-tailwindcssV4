import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem, INavigationHandlerService } from "../../navigation.model";
import { NavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDropdownDisplayHandler } from "./navigation.horizontal.cdk.display.handler";

@Injectable()
export abstract class NavigationHorizontalCdkService implements INavigationHandlerService {
    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(vcr: ViewContainerRef, handler: NavigationHorizontalCdkDropdownDisplayHandler): void {
        const visitor = new NavigationHorizontalCdkDisplayHandlerVisitor(vcr);

        handler.accept(visitor);
    }
}
