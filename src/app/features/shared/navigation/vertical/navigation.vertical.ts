import { Component, computed, effect, inject } from "@angular/core";
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
        return this.navigationVerticalService.menu;
    }

    public get menus(): IMenu[] {
        return this.navigationVerticalService.menus;
    }

    public readonly faAngleLeftIcon = faAngleLeft;
    public readonly navigationVerticalService = inject<NavigationVerticalService>(NavigationVerticalService);
    public readonly activatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    public readonly isVisible = computed(() => this.navigationVerticalService.isVisible());

    constructor() {
        effect((onCleanup) => {
            const menuList = this.navigationVerticalService.data();

            this.navigationVerticalService.setMenu({
                label: "",
                text: "",
                children: menuList
            });

            onCleanup(() => {
                this.navigationVerticalService.reset();
            });
        });
    }

    public back(): void {
        this.navigationVerticalService.back();
    }
}
