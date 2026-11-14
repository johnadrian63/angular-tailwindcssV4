import { Injectable, signal, WritableSignal } from "@angular/core";

import { IMenu, IMenuItem } from "../navigation.model";
import { NavigationMenuResolver } from "../navigation.menu.resolver.visitor";
import { NavigationVerticalResolverVisitor } from "./navigation.vertical.resolver.visitor";

@Injectable()
export abstract class NavigationVerticalService {

    public get menu(): IMenu {
        const selectedMenus = this._selectedMenus();

        return selectedMenus[selectedMenus.length - 1];
    }

    public get selectedMenus(): IMenu[] {
        return this._selectedMenus();
    }

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);
    public readonly isVisible: WritableSignal<boolean> = signal<boolean>(true);

    private readonly _selectedMenus = signal<IMenu[]>([]);

    public handle(resolver: NavigationMenuResolver): void {
        resolver.accept(new NavigationVerticalResolverVisitor(this));
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
