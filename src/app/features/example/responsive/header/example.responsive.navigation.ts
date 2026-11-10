import { Component, ElementRef, inject, input, InputSignal, model, OnInit, output, Signal, signal, viewChild, ViewChild, WritableSignal } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faUser, faTableColumns } from '@fortawesome/free-solid-svg-icons';
import { MatBottomSheet, MatBottomSheetModule } from "@angular/material/bottom-sheet";

import { menuData } from "../../../shared/menu.data";
import { getRange } from "../../../shared/util/range.generator";
import { DropdownMenu, IDropdownMenu } from "../../../shared/dropdown-menu/dropdown.menu";
import { ExampleResponsiveNavigationVerticalMenu } from "./vertical-menu/example.responsive.navigation.vertical.menu";
import { ExampleResponsiveNavigationProfileMenu } from "./profile-menu/example.responsive.navigation.profile.menu";

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
        DropdownMenu
    ],

})
export class ExampleResponsiveNavigation {
    // public readonly faSearchIcon = faSearch;
    public readonly faBarsIcon = faBars;
    public readonly faUserIcon = faUser;
    public readonly faTableColumnsIcon = faTableColumns;
    public readonly sidebarOpen = signal<boolean>(false);
    public readonly toggleSidebar = model<boolean>();
    public readonly menuList: WritableSignal<IDropdownMenu[]> = signal<IDropdownMenu[]>(menuData);
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
    private readonly bottomSheet = inject<MatBottomSheet>(MatBottomSheet);
    private readonly breakpointObserver: BreakpointObserver = inject<BreakpointObserver>(BreakpointObserver);

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
        this.bottomSheet.open(ExampleResponsiveNavigationProfileMenu);
    }
}
