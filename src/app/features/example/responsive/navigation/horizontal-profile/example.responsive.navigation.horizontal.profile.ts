import { Component, inject, OnInit } from "@angular/core";

import { IMenuItem } from "../../../../shared/navigation/navigation.model";
import { NavigationHorizontalCdk } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { ExampleResponsiveNavigationHorizontalProfileCdkService } from "./example.responsive.navigation.horizontal.profile.service";
import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";

@Component({
    selector: "app-example-responsive-navigation-horizontal-profile",
    styleUrl: "./example.responsive.navigation.horizontal.profile.css",
    templateUrl: "./example.responsive.navigation.horizontal.profile.html",
    imports: [NavigationHorizontalCdk],
    providers: [
        ExampleResponsiveNavigationHorizontalProfileCdkService,
        {
            provide: NavigationHorizontalCdkService,
            useExisting: ExampleResponsiveNavigationHorizontalProfileCdkService,
        }
    ],
})
export class ExampleResponsiveNavigationHorizontalProfile implements OnInit {
    private readonly navigationHorizontalCdkService = inject<ExampleResponsiveNavigationHorizontalProfileCdkService>(ExampleResponsiveNavigationHorizontalProfileCdkService);

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

        this.navigationHorizontalCdkService.data.set(navigationData);
    }
}
