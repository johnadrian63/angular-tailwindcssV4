import { Component, inject, model, OnInit, signal } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faUser, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet, MatBottomSheetModule } from "@angular/material/bottom-sheet";

import { getRange } from "../../../shared/util/range.generator";
import { navigationDataMock } from "../../../shared/navigation/navigation.data.mock";
import { ExampleResponsiveNavigationHorizontalService } from "./example.responsive.navigation.horizontal.service";
import { NavigationHorizontalMenuService } from "../../../shared/navigation/horizontal/menu/navigation.horizontal.menu.service";
import { ExampleResponsiveNavigationVerticalMenu } from "./vertical-menu/example.responsive.navigation.vertical.menu";
import { ExampleResponsiveNavigationHorizontalMenu } from "./horizontal-menu/example.responsive.navigation.horizontal.menu";
import { ExampleResponsiveNavigationHorizontalProfile } from "./horizontal-profile/example.responsive.navigation.horizontal.profile";
import { ExampleResponsiveNavigationVerticalProfileMenu } from "./vertical-profile/example.responsive.navigation.vertical.profile.menu";

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
        ExampleResponsiveNavigationHorizontalService,
        {
            provide: NavigationHorizontalMenuService,
            useExisting: ExampleResponsiveNavigationHorizontalService,
        },
    ],
})
export class ExampleResponsiveNavigation implements OnInit {
    public readonly faBarsIcon = faBars;
    public readonly faUserIcon = faUser;
    public readonly faTableColumnsIcon = faTableColumns;
    public readonly sidebarOpen = signal<boolean>(false);
    public readonly toggleSidebar = model<boolean>();
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    private readonly bottomSheet = inject<MatBottomSheet>(MatBottomSheet);
    private readonly breakpointObserver: BreakpointObserver = inject<BreakpointObserver>(BreakpointObserver);
    private readonly navigationHorizontalMenuService: ExampleResponsiveNavigationHorizontalService = inject<ExampleResponsiveNavigationHorizontalService>(ExampleResponsiveNavigationHorizontalService);

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
        this.navigationHorizontalMenuService.data.set(navigationDataMock);
    }

    public getRange(range: number): number[] {
        return getRange(range);
    }

    public toggle(): void {
        this.toggleSidebar.update((toggled) => !toggled);
    }

    public openMenu(): void {
        this.bottomSheet.open(ExampleResponsiveNavigationVerticalMenu);
    }

    public openProfile(): void {
        this.bottomSheet.open(ExampleResponsiveNavigationVerticalProfileMenu);
    }
}
