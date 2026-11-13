import { Component } from "@angular/core";

import { NavigationVertical } from "../../../../shared/navigation/vertical/navigation.vertical";
import { NavigationVerticalService } from "../../../../shared/navigation/vertical/navigation.vertical.service";
import { ExampleResponsiveNavigationVerticalProfileMenuService } from "./example.responsive.navigation.vertical.profile.menu.service";

@Component({
    selector: "app-example-responsive-navigation-vertical-profile-menu",
    styleUrl: "./example.responsive.navigation.vertical.profile.menu.css",
    templateUrl: "./example.responsive.navigation.vertical.profile.menu.html",
    imports: [NavigationVertical],
    providers: [
        {
            provide: NavigationVerticalService,
            useExisting: ExampleResponsiveNavigationVerticalProfileMenuService,
        }
    ],
})
export class ExampleResponsiveNavigationVerticalProfileMenu { }
