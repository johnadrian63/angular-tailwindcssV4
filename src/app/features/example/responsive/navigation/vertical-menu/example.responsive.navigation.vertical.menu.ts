import { Component } from "@angular/core";

import { NavigationVertical } from "../../../../shared/navigation/vertical/navigation.vertical";
import { NavigationVerticalService } from "../../../../shared/navigation/vertical/navigation.vertical.service";
import { ExampleResponsiveNavigationVerticalMenuService } from "./example.responsive.navigation.vertical.menu.service";

@Component({
    selector: "app-example-responsive-navigation-vertical-menu",
    styleUrl: "./example.responsive.navigation.vertical.menu.css",
    templateUrl: "./example.responsive.navigation.vertical.menu.html",
    imports: [NavigationVertical],
    providers: [
        {
            provide: NavigationVerticalService,
            useExisting: ExampleResponsiveNavigationVerticalMenuService,
        }
    ],
})
export class ExampleResponsiveNavigationVerticalMenu { }
