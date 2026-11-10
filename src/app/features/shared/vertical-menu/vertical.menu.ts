import { Component, effect, inject, signal } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { menuData } from "../menu.data";
import { getRange } from "../util/range.generator";
import { IDropdownMenu } from "../dropdown-menu/dropdown.menu";

export interface IVerticalMenu {
    parent?: IDropdownMenu;
    children: IDropdownMenu[];
}

@Component({
    selector: "app-vertical-menu",
    styleUrl: "./vertical.menu.css",
    templateUrl: "./vertical.menu.html",
    imports: [RouterLink, FaIconComponent],
})
export class VerticalMenu {

    public get currentMenu(): IVerticalMenu {
        const selectedMenus = this.selectedMenus();

        return selectedMenus[selectedMenus.length - 1];
    }

    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public readonly faAngleRightIcon = faAngleRight;
    public readonly faAngleLeftIcon = faAngleLeft;

    public readonly menuList = signal<IDropdownMenu[]>(menuData);
    public previousMenu: IDropdownMenu[] = [];
    public readonly selectedMenus = signal<IVerticalMenu[]>([]);

    constructor() {
        effect(() => {
            const menuList = this.menuList();

            this.selectedMenus.set([
                {
                    children: menuList
                }
            ]);
        });
    }

    public isVisible = signal<boolean>(true);

    public expand(parent: IDropdownMenu, menuList: IDropdownMenu[]): void {
        this.animate();

        this.selectedMenus.update((menus) => {
            menus.push({
                parent,
                children: menuList
            });

            return menus;
        });
    }

    private animate(): void {
        this.isVisible.set(false);

        setTimeout(() => {
            this.isVisible.set(true);
        }, 150);
    }

    public back(): void {
        this.animate();

        this.selectedMenus.update((menus: IVerticalMenu[]) => {
            menus.pop();

            return menus;
        });
    }

    public getRange(range: number): number[] {
        return getRange(range);
    }
}
