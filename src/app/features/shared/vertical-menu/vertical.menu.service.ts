import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { VerticalMenuLink } from "./link/vertical.menu.link";
import { VerticalMenuExpand } from "./expand/vertical.menu.expand";
import { IVerticalMenu, IVerticalMenuItem } from "./vertical.menu.model";

@Injectable()
export abstract class VerticalMenuService {
    public get menu(): IVerticalMenu {
        const selectedMenus = this.selectedMenus();

        return selectedMenus[selectedMenus.length - 1];
    }

    public get menus(): IVerticalMenu[] {
        return this.selectedMenus();
    }

    public readonly data: WritableSignal<IVerticalMenuItem[]> = signal<IVerticalMenuItem[]>([]);
    private readonly selectedMenus = signal<IVerticalMenu[]>([]);

    public handleData(vcr: ViewContainerRef, data: IVerticalMenuItem): void {
        if (data.children?.length) {
            this.handleExpand(vcr, data);
        } else {
            this.handleLink(vcr, data);
        }
    }

    public handleExpand(vcr: ViewContainerRef, data: IVerticalMenuItem): void {
        const componentRef = vcr.createComponent(VerticalMenuExpand);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleLink(vcr: ViewContainerRef, data: IVerticalMenuItem): void {
        const componentRef = vcr.createComponent(VerticalMenuLink);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public setMenu(parent: IVerticalMenuItem | undefined, children: IVerticalMenuItem[]): void {
        this.selectedMenus.update((menus) => {
            menus.push({
                parent,
                children: children
            });

            return menus;
        });
    }

    public back(): void {
        this.selectedMenus.update((menus: IVerticalMenu[]) => {
            menus.pop();

            return menus;
        });
    }
}