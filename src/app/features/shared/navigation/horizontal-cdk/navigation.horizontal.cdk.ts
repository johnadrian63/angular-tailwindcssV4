import { Component, inject, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenu, MatMenuModule } from "@angular/material/menu";
import { IMenuItem } from "../navigation.model";
import { NavigationHorizontalCdkService } from "./navigation.horizontal.cdk.service";
import { NavigationMenuResolver } from "./navigation.horizontal.cdk.resolver";

@Component({
    selector: "app-navigation-horizontal-cdk",
    styleUrl: "./navigation.horizontal.cdk.css",
    templateUrl: "./navigation.horizontal.cdk.html",
    imports: [
    MatButtonModule,
    MatMenuModule,
    NavigationMenuResolver
],
})
export class NavigationHorizontalCdk {
    public readonly navigationMenuService: NavigationHorizontalCdkService = inject<NavigationHorizontalCdkService>(NavigationHorizontalCdkService);

    public get menus(): IMenuItem[] {
        return this.navigationMenuService.data();
    }
}
