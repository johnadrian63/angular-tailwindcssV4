import { Component, effect, inject, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

import { IMenu } from "../navigation.menu.model";
import { NavigationVerticalMenuService } from "./navigation.menu.vertical.service";
import { NavigationVerticalMenuResolver } from "./navigation.menu.vertical.resolver";

@Component({
    selector: "app-vertical-menu",
    styleUrl: "./navigation.menu.vertical.css",
    templateUrl: "./navigation.menu.vertical.html",
    imports: [FaIconComponent, NavigationVerticalMenuResolver],
})
export class NavigationVerticalMenu {

    public get currentMenu(): IMenu {
        return this.verticalMenuService.menu;
    }

    public get menus(): IMenu[] {
        return this.verticalMenuService.menus;
    }

    public readonly faAngleLeftIcon = faAngleLeft;
    public readonly verticalMenuService = inject<NavigationVerticalMenuService>(NavigationVerticalMenuService);
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public readonly isVisible: WritableSignal<boolean> = signal<boolean>(true);

    constructor() {
        effect(() => {
            const menuList = this.verticalMenuService.data();


            this.verticalMenuService.setMenu(undefined, menuList);
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

        this.verticalMenuService.back();
    }
}
