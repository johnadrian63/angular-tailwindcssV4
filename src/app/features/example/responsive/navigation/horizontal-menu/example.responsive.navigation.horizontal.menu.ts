import { Component, inject, OnInit } from "@angular/core";

import { navigationDataMock } from "../../../../shared/navigation/navigation.data.mock";
import { NavigationHorizontalCdk } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { ExampleResponsiveNavigationHorizontalMenuCdkService } from "./example.responsive.navigation.horizontal.menu.cdk.service";

@Component({
    selector: "app-example-responsive-navigation-horizontal-menu",
    styleUrl: "./example.responsive.navigation.horizontal.menu.css",
    templateUrl: "./example.responsive.navigation.horizontal.menu.html",
    imports: [NavigationHorizontalCdk],
    providers: [
        ExampleResponsiveNavigationHorizontalMenuCdkService,
        {
            provide: NavigationHorizontalCdkService,
            useExisting: ExampleResponsiveNavigationHorizontalMenuCdkService,
        }
    ],
})
export class ExampleResponsiveNavigationHorizontalMenu implements OnInit {
    private readonly verticalMenuService = inject<ExampleResponsiveNavigationHorizontalMenuCdkService>(ExampleResponsiveNavigationHorizontalMenuCdkService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(navigationDataMock);
    }
}
