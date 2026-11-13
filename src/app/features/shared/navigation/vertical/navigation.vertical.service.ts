import { Injectable, signal, WritableSignal } from "@angular/core";

import { IMenu, IMenuItem, NavigationMenuResolver } from "../navigation.model";
import { NavigationVerticalResolverVisitor } from "./navigation.vertical.resolver.visitor";

@Injectable()
export abstract class NavigationVerticalService {

    public get menu(): IMenu {
        const selectedMenus = this.selectedMenus();

        return selectedMenus[selectedMenus.length - 1];
    }

    public get menus(): IMenu[] {
        return this.selectedMenus();
    }

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);
    public readonly isVisible: WritableSignal<boolean> = signal<boolean>(true);

    private readonly selectedMenus = signal<IMenu[]>([]);

    public handle(resolver: NavigationMenuResolver): void {
        resolver.accept(new NavigationVerticalResolverVisitor(this));
    }

    public setMenu(menu: IMenuItem | undefined): void {
        this.animate();

        this.selectedMenus.update((menus) => {
            menus.push({
                parent: menu,
                children: menu?.children!
            });

            return menus;
        });
    }

    public back(): void {
        this.animate();

        this.selectedMenus.update((menus: IMenu[]) => {
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
        this.selectedMenus.set([]);
    }
}
