import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenu, IMenuItem } from "../navigation.menu.model";
import { NavigationVerticalMenuExpand } from "./expand/navigation.vertical.menu.expand";
import { NavigationVerticalMenuLink } from "./link/vertical.menu.link";


@Injectable()
export abstract class NavigationVerticalMenuService {
    public get menu(): IMenu {
        const selectedMenus = this.selectedMenus();

        return selectedMenus[selectedMenus.length - 1];
    }

    public get menus(): IMenu[] {
        return this.selectedMenus();
    }

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);
    private readonly selectedMenus = signal<IMenu[]>([]);

    public handleData(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleExpand(vcr, data);
        } else {
            this.handleLink(vcr, data);
        }
    }

    public handleExpand(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationVerticalMenuExpand);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleLink(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationVerticalMenuLink);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public setMenu(parent: IMenuItem | undefined, children: IMenuItem[]): void {
        this.selectedMenus.update((menus) => {
            menus.push({
                parent,
                children: children
            });

            return menus;
        });
    }

    public back(): void {
        this.selectedMenus.update((menus: IMenu[]) => {
            menus.pop();

            return menus;
        });
    }
}
