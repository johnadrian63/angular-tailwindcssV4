import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

import { IMenuItem } from "../../navigation.model";
import { NavigationHorizontalCdkResolver } from "./navigation.horizontal.cdk.resolver";
import { NavigationHorizontalCdkService } from "./navigation.horizontal.cdk.service";

@Component({
    selector: "app-navigation-horizontal-cdk",
    styleUrl: "./navigation.horizontal.cdk.css",
    templateUrl: "./navigation.horizontal.cdk.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationHorizontalCdkResolver
    ],
})
export class NavigationHorizontalCdk {
    public readonly navigationMenuService: NavigationHorizontalCdkService = inject<NavigationHorizontalCdkService>(NavigationHorizontalCdkService);

    public get menus(): IMenuItem[] {
        return this.navigationMenuService.data();
    }
}
