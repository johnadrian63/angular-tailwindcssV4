import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationDisplayHandler } from "../../navigation.display.handler";
import { IMenuItem, INavigationHandlerService } from "../../navigation.model";
import { NavigationHorizontalCdkDisplayHandlerVisitor } from "./navigation.horizontal.cdk.display.handler";

@Injectable()
export abstract class NavigationHorizontalCdkService implements INavigationHandlerService {
    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler): void {
        const visitor = new NavigationHorizontalCdkDisplayHandlerVisitor(vcr);

        handler.accept(visitor);
    }
}
