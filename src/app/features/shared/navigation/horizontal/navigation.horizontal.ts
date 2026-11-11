import { Component, inject, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenu, MatMenuModule } from "@angular/material/menu";

import { IMenuItem } from "../navigation.model";
import { NavigationMenuResolver } from "./navigation.horizontal.resolver";
import { NavigationHorizontalService } from "./navigation.horizontal.service";

@Component({
    selector: "app-navigation-horizontal",
    styleUrl: "./navigation.horizontal.css",
    templateUrl: "./navigation.horizontal.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationMenuResolver
    ],
})
export class NavigationHorizontal {

    public get menus(): IMenuItem[] {
        return this.navigationMenuService.data();
    }

    public readonly navigationMenuService: NavigationHorizontalService = inject<NavigationHorizontalService>(NavigationHorizontalService);

    public items = viewChild<MatMenu>("items");
}
