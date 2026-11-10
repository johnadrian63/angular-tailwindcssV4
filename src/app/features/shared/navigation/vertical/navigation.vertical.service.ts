import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenu, IMenuItem } from "../navigation.model";
import { NavigationLink } from "../link/navigation.link";
import { NavigationExpand } from "../expand/navigation.expand";

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
    private readonly selectedMenus = signal<IMenu[]>([]);

    public handleData(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleExpand(vcr, data);
        } else {
            this.handleLink(vcr, data);
        }
    }

    public handleExpand(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationExpand);

        componentRef.instance.menu.set(data);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.instance
            .onExpand
            .subscribe((data) => {
                this.setMenu(data);
            });

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleLink(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationLink);

        componentRef.instance.menu.set(data);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.changeDetectorRef.detectChanges();
    }

    public setMenu(menu: IMenuItem | undefined): void {
        this.selectedMenus.update((menus) => {
            menus.push({
                parent: menu,
                children: menu?.children!
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
