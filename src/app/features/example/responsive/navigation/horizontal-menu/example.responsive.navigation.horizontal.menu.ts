import { Component, inject, OnInit } from "@angular/core";

import { navigationDataMock } from "../../../../shared/navigation/navigation.data.mock";
import { NavigationHorizontal } from "../../../../shared/navigation/horizontal/navigation.horizontal";
import { ExampleResponsiveNavigationHorizontalMenuService } from "./example.responsive.navigation.horizontal.menu.service";
import { NavigationHorizontalService } from "../../../../shared/navigation/horizontal/navigation.horizontal.service";

@Component({
    selector: "app-example-responsive-navigation-horizontal-menu",
    styleUrl: "./example.responsive.navigation.horizontal.menu.css",
    templateUrl: "./example.responsive.navigation.horizontal.menu.html",
    imports: [NavigationHorizontal],
    providers: [
        ExampleResponsiveNavigationHorizontalMenuService,
        {
            provide: NavigationHorizontalService,
            useExisting: ExampleResponsiveNavigationHorizontalMenuService,
        }
    ],
})
export class ExampleResponsiveNavigationHorizontalMenu implements OnInit {
    private readonly verticalMenuService = inject<ExampleResponsiveNavigationHorizontalMenuService>(ExampleResponsiveNavigationHorizontalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(navigationDataMock);
    }
}
