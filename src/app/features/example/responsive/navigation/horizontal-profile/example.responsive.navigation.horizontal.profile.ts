import { Component, inject, OnInit } from "@angular/core";

import { IMenuItem } from "../../../../shared/navigation/navigation.model";
import { NavigationHorizontal } from "../../../../shared/navigation/horizontal/navigation.horizontal";
import { NavigationHorizontalService } from "../../../../shared/navigation/horizontal/navigation.horizontal.service";
import { ExampleResponsiveNavigationHorizontalProfileService } from "./example.responsive.navigation.horizontal.profile.service";

@Component({
    selector: "app-example-responsive-navigation-horizontal-profile",
    styleUrl: "./example.responsive.navigation.horizontal.profile.css",
    templateUrl: "./example.responsive.navigation.horizontal.profile.html",
    imports: [NavigationHorizontal],
    providers: [
        ExampleResponsiveNavigationHorizontalProfileService,
        {
            provide: NavigationHorizontalService,
            useExisting: ExampleResponsiveNavigationHorizontalProfileService,
        }
    ],
})
export class ExampleResponsiveNavigationHorizontalProfile implements OnInit {
    private readonly verticalMenuService = inject<ExampleResponsiveNavigationHorizontalProfileService>(ExampleResponsiveNavigationHorizontalProfileService);

    public ngOnInit(): void {
        const navigationData: IMenuItem[] = [
            {
                label: "john",
                text: "John",
                children: [
                    {
                        label: "profile",
                        text: "Profile",
                    },
                    {
                        label: "logout",
                        text: "Logout",
                    },
                ]
            },
        ];

        this.verticalMenuService.data.set(navigationData);
    }
}
