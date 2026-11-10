import { Component, inject, OnInit } from "@angular/core";

import { ExampleResponsiveNavigationVerticalMenuService } from "./example.responsive.navigation.vertical.menu.service";
import { NavigationVerticalService } from "../../../../shared/navigation/vertical/navigation.vertical.service";
import { navigationDataMock } from "../../../../shared/navigation/navigation.data.mock";
import { NavigationVertical } from "../../../../shared/navigation/vertical/navigation.vertical";

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
    private readonly verticalMenuService = inject<ExampleResponsiveNavigationVerticalMenuService>(ExampleResponsiveNavigationVerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(navigationDataMock);
    }
}
