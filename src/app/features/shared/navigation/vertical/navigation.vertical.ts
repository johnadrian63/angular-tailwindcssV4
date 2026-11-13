import { Component, effect, inject, signal, WritableSignal } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenu } from "../navigation.model";
import { NavigationVerticalService } from "./navigation.vertical.service";
import { NavigationVerticalResolver } from "./navigation.vertical.resolver";

@Component({
    selector: "app-navigation-vertical",
    styleUrl: "./navigation.vertical.css",
    templateUrl: "./navigation.vertical.html",
    imports: [FaIconComponent, NavigationVerticalResolver],
})
export class NavigationVertical {

    public get currentMenu(): IMenu {
        return this.verticalMenuService.menu;
    }

    public get menus(): IMenu[] {
        return this.verticalMenuService.menus;
    }

    public readonly faAngleLeftIcon = faAngleLeft;
    public readonly verticalMenuService = inject<NavigationVerticalService>(NavigationVerticalService);
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public readonly isVisible: WritableSignal<boolean> = signal<boolean>(true);

    constructor() {
        effect((onCleanup) => {
            const menuList = this.verticalMenuService.data();

            this.verticalMenuService.setMenu({
                label: "",
                text: "",
                children: menuList
            });

            onCleanup(() => {
                this.verticalMenuService.reset();
            });
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
