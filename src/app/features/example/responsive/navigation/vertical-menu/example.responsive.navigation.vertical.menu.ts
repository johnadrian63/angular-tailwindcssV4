import { Component, inject, OnInit } from "@angular/core";

import { navigationDataMock } from "../../../../shared/navigation/navigation.data.mock";
import { NavigationVertical } from "../../../../shared/navigation/vertical/navigation.vertical";
import { NavigationVerticalService } from "../../../../shared/navigation/vertical/navigation.vertical.service";
import { ExampleResponsiveNavigationVerticalMenuService } from "./example.responsive.navigation.vertical.menu.service";

@Component({
    selector: "app-example-responsive-navigation-vertical-menu",
    styleUrl: "./example.responsive.navigation.vertical.menu.css",
    templateUrl: "./example.responsive.navigation.vertical.menu.html",
    imports: [NavigationVertical],
    providers: [
        ExampleResponsiveNavigationVerticalMenuService,
        {
            provide: NavigationVerticalService,
            useExisting: ExampleResponsiveNavigationVerticalMenuService,
        }
    ],
})
export class ExampleResponsiveNavigationVerticalMenu implements OnInit {
    private readonly navigationVerticalMenuService = inject<ExampleResponsiveNavigationVerticalMenuService>(ExampleResponsiveNavigationVerticalMenuService);

    public ngOnInit(): void {
        this.navigationVerticalMenuService.data.set(navigationDataMock);
    }
}
