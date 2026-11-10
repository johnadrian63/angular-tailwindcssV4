import { Component, inject, OnInit } from "@angular/core";

import { NavigationVerticalMenu } from "../../../../shared/navigation-menu/vertical/navigation.menu.vertical";
import { ExampleResponsiveNavigationVerticalMenuService } from "./example.responsive.navigation.vertical.menu.service";
import { NavigationVerticalMenuService } from "../../../../shared/navigation-menu/vertical/navigation.menu.vertical.service";
import { navigationMenuDataMock } from "../../../../shared/navigation-menu/vertical/navigation.menu.vertical.data.mock";

@Component({
    selector: "app-example-responsive-navigation-vertical-menu",
    styleUrl: "./example.responsive.navigation.vertical.menu.css",
    templateUrl: "./example.responsive.navigation.vertical.menu.html",
    imports: [NavigationVerticalMenu],
    providers: [
        ExampleResponsiveNavigationVerticalMenuService,
        {
            provide: NavigationVerticalMenuService,
            useExisting: ExampleResponsiveNavigationVerticalMenuService,
        }
    ],
})
export class ExampleResponsiveNavigationVerticalMenu implements OnInit {
    private readonly verticalMenuService = inject<ExampleResponsiveNavigationVerticalMenuService>(ExampleResponsiveNavigationVerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(navigationMenuDataMock);
    }
}
