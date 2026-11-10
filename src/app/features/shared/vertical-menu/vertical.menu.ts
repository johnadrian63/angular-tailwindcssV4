import { Component, effect, inject, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { IVerticalMenu } from "./vertical.menu.model";
import { VerticalMenuService } from "./vertical.menu.service";
import { VerticalMenuResolver } from "./vertical.menu.resolver";

@Component({
    selector: "app-vertical-menu",
    styleUrl: "./vertical.menu.css",
    templateUrl: "./vertical.menu.html",
    imports: [FaIconComponent, VerticalMenuResolver],
})
export class VerticalMenu {

    public get currentMenu(): IVerticalMenu {
        return this.verticalMenuService.menu;
    }

    public get menus(): IVerticalMenu[] {
        return this.verticalMenuService.menus;
    }

    public readonly faAngleLeftIcon = faAngleLeft;
    public readonly verticalMenuService = inject<VerticalMenuService>(VerticalMenuService);
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public isVisible: WritableSignal<boolean> = signal<boolean>(true);

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
