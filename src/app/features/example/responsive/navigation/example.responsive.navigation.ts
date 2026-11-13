import { Component, inject, Injector, model, OnInit, signal } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { faBars, faUser, faTableColumns } from "@fortawesome/free-solid-svg-icons";
import { MatBottomSheet, MatBottomSheetModule } from "@angular/material/bottom-sheet";

import { getRange } from "../../../shared/util/range.generator";
import { IMenuItem } from "../../../shared/navigation/navigation.model";
import { navigationDataMock } from "../../../shared/navigation/navigation.data.mock";
import { ExampleResponsiveNavigationVerticalMenu } from "./vertical-menu/example.responsive.navigation.vertical.menu";
import { ExampleResponsiveNavigationHorizontalMenu } from "./horizontal-menu/example.responsive.navigation.horizontal.menu";
import { ExampleResponsiveNavigationHorizontalProfile } from "./horizontal-profile/example.responsive.navigation.horizontal.profile";
import { ExampleResponsiveNavigationVerticalProfileMenu } from "./vertical-profile/example.responsive.navigation.vertical.profile.menu";
import { ExampleResponsiveNavigationHorizontalMenuCdkService } from "./horizontal-menu/example.responsive.navigation.horizontal.menu.cdk.service";
import { ExampleResponsiveNavigationHorizontalProfileCdkService } from "./horizontal-profile/example.responsive.navigation.horizontal.profile.service";
import { ExampleResponsiveNavigationVerticalMenuService } from "./vertical-menu/example.responsive.navigation.vertical.menu.service";
import { ExampleResponsiveNavigationVerticalProfileMenuService } from "./vertical-profile/example.responsive.navigation.vertical.profile.menu.service";

@Component({
    selector: "app-example-responsive-navigation",
    templateUrl: "./example.responsive.navigation.html",
    styleUrl: "./example.responsive.navigation.css",
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatBottomSheetModule,
        FaIconComponent,
        RouterModule,
        ExampleResponsiveNavigationHorizontalMenu,
        ExampleResponsiveNavigationHorizontalProfile
    ],
    providers: [
        ExampleResponsiveNavigationHorizontalMenuCdkService,
        ExampleResponsiveNavigationHorizontalProfileCdkService,
        ExampleResponsiveNavigationVerticalMenuService,
        ExampleResponsiveNavigationVerticalProfileMenuService
    ],
})
export class ExampleResponsiveNavigation implements OnInit {
    public readonly faBarsIcon = faBars;
    public readonly faUserIcon = faUser;
    public readonly faTableColumnsIcon = faTableColumns;
    public readonly sidebarOpen = signal<boolean>(false);
    public readonly toggleSidebar = model<boolean>();
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    private readonly injector = inject<Injector>(Injector);
    private readonly bottomSheet = inject<MatBottomSheet>(MatBottomSheet);
    private readonly breakpointObserver: BreakpointObserver = inject<BreakpointObserver>(BreakpointObserver);
    private readonly navigationHorizontalMenuCdkService: ExampleResponsiveNavigationHorizontalMenuCdkService = inject<ExampleResponsiveNavigationHorizontalMenuCdkService>(ExampleResponsiveNavigationHorizontalMenuCdkService);
    private readonly navigationHorizontalProfileCdkService: ExampleResponsiveNavigationHorizontalProfileCdkService = inject<ExampleResponsiveNavigationHorizontalProfileCdkService>(ExampleResponsiveNavigationHorizontalProfileCdkService);
    private readonly navigationVerticalMenuService: ExampleResponsiveNavigationVerticalMenuService = inject<ExampleResponsiveNavigationVerticalMenuService>(ExampleResponsiveNavigationVerticalMenuService);
    private readonly navigationVerticalProfileMenuService: ExampleResponsiveNavigationVerticalProfileMenuService = inject<ExampleResponsiveNavigationVerticalProfileMenuService>(ExampleResponsiveNavigationVerticalProfileMenuService);

    constructor() {
        this.breakpointObserver.observe([
            Breakpoints.Handset,
            "(max-width: 768px)"
        ]).pipe(
            takeUntilDestroyed()
        ).subscribe((result) => {
            const isMobile = result.matches;

            this.toggleSidebar.set(!isMobile);
        });
    }

    public ngOnInit(): void {
        this.navigationHorizontalMenuCdkService.data.set(navigationDataMock);
        this.navigationVerticalMenuService.data.set(navigationDataMock);

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

        this.navigationHorizontalProfileCdkService.data.set(navigationData);
        this.navigationVerticalProfileMenuService.data.set(navigationData[0].children!);
    }

    public getRange(range: number): number[] {
        return getRange(range);
    }

    public toggle(): void {
        this.toggleSidebar.update((toggled) => !toggled);
    }

    public openMenu(): void {
        this.bottomSheet.open(ExampleResponsiveNavigationVerticalMenu, {
            injector: this.injector
        });
    }

    public openProfile(): void {
        this.bottomSheet.open(ExampleResponsiveNavigationVerticalProfileMenu, {
            injector: this.injector
        });
    }
}
