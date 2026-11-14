import { Component, inject, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenu, MatMenuModule } from "@angular/material/menu";

import { IMenuItem } from "../../navigation.model";
import { NavigationHorizontalMenuService } from "./navigation.horizontal.menu.service";
import { NavigationHorizontalMenuResolver } from "./navigation.horizontal.menu.resolver";

@Component({
    selector: "app-navigation-horizontal-menu",
    styleUrl: "./navigation.horizontal.menu.css",
    templateUrl: "./navigation.horizontal.menu.html",
    imports: [
        MatMenuModule,
        MatButtonModule,
        NavigationHorizontalMenuResolver
    ],
})
export class NavigationHorizontalMenu {

    public get menus(): IMenuItem[] {
        return this.navigationHorizontalMenuService.menus();
    }

    public readonly navigationHorizontalMenuService: NavigationHorizontalMenuService = inject<NavigationHorizontalMenuService>(NavigationHorizontalMenuService);

    public readonly items = viewChild<MatMenu>("items");
}
