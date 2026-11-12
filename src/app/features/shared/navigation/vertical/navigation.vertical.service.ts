import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationLink } from "../display/link/navigation.link";
import { NavigationExpand } from "../display/expand/navigation.expand";
import { IMenu, IMenuItem, INavigationService } from "../navigation.model";

@Injectable()
export abstract class NavigationVerticalService implements INavigationService {

    public get menu(): IMenu {
        const selectedMenus = this.selectedMenus();

        return selectedMenus[selectedMenus.length - 1];
    }

    public get menus(): IMenu[] {
        return this.selectedMenus();
    }

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    private readonly selectedMenus = signal<IMenu[]>([]);

    public handle(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleNested(vcr, data);
        } else {
            this.handleSingle(vcr, data);
        }
    }

    public handleNested(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationExpand);

        componentRef.instance.menu.set(data);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.instance
            .onExpand
            .subscribe((data: IMenuItem) => {
                this.setMenu(data);
            });

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleSingle(vcr: ViewContainerRef, data: IMenuItem): void {
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
