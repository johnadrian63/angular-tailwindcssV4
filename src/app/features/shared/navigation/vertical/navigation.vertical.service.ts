import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationDisplayHandler } from "../navigation.display.handler";
import { IMenu, IMenuItem, INavigationHandlerService } from "../navigation.model";
import { NavigationVerticalDisplayHandler } from "./navigation.vertical.display.handler";

@Injectable()
export abstract class NavigationVerticalService implements INavigationHandlerService {

    public get menu(): IMenu {
        const selectedMenus = this._selectedMenus();

        return selectedMenus[selectedMenus.length - 1];
    }

    public get selectedMenus(): IMenu[] {
        return this._selectedMenus();
    }

    public readonly menus: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);
    public readonly isVisible: WritableSignal<boolean> = signal<boolean>(true);

    private readonly _selectedMenus = signal<IMenu[]>([]);

    public handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler): void {
        handler.accept(new NavigationVerticalDisplayHandler(vcr));
    }

    public setMenu(menu: IMenuItem | undefined): void {
        this.animate();

        this._selectedMenus.update((menus) => {
            menus.push({
                parent: menu,
                children: menu?.children!
            });

            return menus;
        });
    }

    public back(): void {
        this.animate();

        this._selectedMenus.update((menus: IMenu[]) => {
            menus.pop();

            return menus;
        });
    }

    public animate(): void {
        this.isVisible.set(false);

        setTimeout(() => {
            this.isVisible.set(true);
        }, 100);
    }

    public reset(): void {
        this._selectedMenus.set([]);
    }
}
