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
        {
            provide: NavigationHorizontalCdkService,
            useExisting: ExampleResponsiveNavigationHorizontalProfileCdkService,
        }
    ],
})
export class ExampleResponsiveNavigationHorizontalProfile { }
