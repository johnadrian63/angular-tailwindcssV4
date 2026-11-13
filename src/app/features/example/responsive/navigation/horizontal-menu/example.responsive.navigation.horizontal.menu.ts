import { Component } from "@angular/core";

import { NavigationHorizontalCdk } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { ExampleResponsiveNavigationHorizontalMenuCdkService } from "./example.responsive.navigation.horizontal.menu.cdk.service";

@Component({
    selector: "app-example-responsive-navigation-horizontal-menu",
    styleUrl: "./example.responsive.navigation.horizontal.menu.css",
    templateUrl: "./example.responsive.navigation.horizontal.menu.html",
    imports: [NavigationHorizontalCdk],
    providers: [
        {
            provide: NavigationHorizontalCdkService,
            useExisting: ExampleResponsiveNavigationHorizontalMenuCdkService,
        }
    ],
})
export class ExampleResponsiveNavigationHorizontalMenu { }
