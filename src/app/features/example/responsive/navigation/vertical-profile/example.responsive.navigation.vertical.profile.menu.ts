import { ChangeDetectorRef, Component, inject, OnInit } from "@angular/core";

import { IMenuItem } from "../../../../shared/navigation/navigation.model";
import { NavigationVertical } from "../../../../shared/navigation/vertical/navigation.vertical";
import { NavigationVerticalService } from "../../../../shared/navigation/vertical/navigation.vertical.service";
import { ExampleResponsiveNavigationVerticalProfileMenuService } from "./example.responsive.navigation.vertical.profile.menu.service";

@Component({
    selector: "app-example-responsive-navigation-vertical-profile-menu",
    styleUrl: "./example.responsive.navigation.vertical.profile.menu.css",
    templateUrl: "./example.responsive.navigation.vertical.profile.menu.html",
    imports: [NavigationVertical],
    providers: [
        ExampleResponsiveNavigationVerticalProfileMenuService,
        {
            provide: NavigationVerticalService,
            useExisting: ExampleResponsiveNavigationVerticalProfileMenuService,
        }
    ],
})
export class ExampleResponsiveNavigationVerticalProfileMenu implements OnInit {
    private readonly navigationVerticalService: ExampleResponsiveNavigationVerticalProfileMenuService = inject<ExampleResponsiveNavigationVerticalProfileMenuService>(ExampleResponsiveNavigationVerticalProfileMenuService);
    private readonly cdr = inject<ChangeDetectorRef>(ChangeDetectorRef);
    private navigationData: IMenuItem[] = [
        {
            label: "profile",
            text: "Profile",
        },
        {
            label: "logout",
            text: "Logout",
        },
    ];

    public ngOnInit(): void {
        setTimeout(() => {
            // this.navigationVerticalService.data.set(this.navigationData);

            this.cdr.detectChanges();
        }, 3000);
    }

    public open(): void {
        this.navigationVerticalService.data.set(this.navigationData);

        console.log(">>>>>>>>>>");
    }
}
