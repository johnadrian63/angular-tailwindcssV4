import { Component, inject } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

import { IMenuItem } from "../../navigation.model";
import { NavigationHorizontalCdkService } from "./navigation.horizontal.cdk.service";
import { NavigationHorizontalCdkResolver } from "./resolver/navigation.horizontal.cdk.resolver";
import { NavigationHorizontalCdkResolverService } from "./navigation.horizontal.cdk.resolver.service";
import { NavigationHorizontalCdkBaseResolverService } from "./resolver/navigation.horizontal.cdk.base.resolver.service";

@Component({
    selector: "app-navigation-horizontal-cdk",
    styleUrl: "./navigation.horizontal.cdk.css",
    templateUrl: "./navigation.horizontal.cdk.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationHorizontalCdkResolver,
    ],
    providers: [
        NavigationHorizontalCdkResolverService,
        {
            provide: NavigationHorizontalCdkBaseResolverService,
            useExisting: NavigationHorizontalCdkResolverService,
        }
    ],
})
export class NavigationHorizontalCdk {
    public readonly navigationMenuService: NavigationHorizontalCdkService = inject<NavigationHorizontalCdkService>(NavigationHorizontalCdkService);

    public get menus(): IMenuItem[] {
        return this.navigationMenuService.menus();
    }
}
