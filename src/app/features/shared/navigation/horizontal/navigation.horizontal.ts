import { Component, inject, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenu, MatMenuModule } from "@angular/material/menu";

import { IMenuItem } from "../navigation.model";
import { NavigationHorizontalService } from "./navigation.horizontal.service";
import { NavigationHorizontalResolver } from "./navigation.horizontal.resolver";

@Component({
    selector: "app-navigation-horizontal",
    styleUrl: "./navigation.horizontal.css",
    templateUrl: "./navigation.horizontal.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationHorizontalResolver
    ],
})
export class NavigationHorizontal {

    public get menus(): IMenuItem[] {
        return this.navigationHorizontalService.data();
    }

    public readonly navigationHorizontalService: NavigationHorizontalService = inject<NavigationHorizontalService>(NavigationHorizontalService);

    public items = viewChild<MatMenu>("items");
}
