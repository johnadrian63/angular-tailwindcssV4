import { Component, ElementRef, inject, Signal, signal, viewChild } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";
import { faBars, faTableColumns } from '@fortawesome/free-solid-svg-icons';

import { getRange } from "../../shared/util/range.generator";
import { ExampleResponsiveHeader } from "./header/example.responsive.header";

@Component({
    selector: "app-example-responsive",
    styleUrl: "./example.responsive.css",
    templateUrl: "./example.responsive.html",
    imports: [RouterModule, ExampleResponsiveHeader],
})
export class ExampleResponsive {
    // public readonly faSearchIcon = faSearch;
    public readonly faBarsIcon = faBars;
    public readonly faTableColumnsIcon = faTableColumns;
    public readonly sidebarOpen = signal<boolean>(false);
    public readonly navigationOpen = signal<boolean>(false);
    public readonly profileOpen = signal<boolean>(false);

    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    private readonly breakpointObserver: BreakpointObserver = inject<BreakpointObserver>(BreakpointObserver);

    public toggleProfileElem: Signal<ElementRef<any> | undefined> = viewChild("toggleProfileIcon", {
        read: ElementRef
    });

    constructor() {
        this.breakpointObserver.observe([
            Breakpoints.Handset,
            "(max-width: 768px)"
        ]).pipe(
            takeUntilDestroyed()
        ).subscribe((result) => {
            const isMobile = result.matches;

            this.sidebarOpen.set(!isMobile);
        });
    }

    public getRange(range: number): number[] {
        return getRange(range);
    }

    public toggleSidebar(): void {
        this.navigationOpen.set(false);
        this.profileOpen.set(false);

        this.sidebarOpen.update((value: boolean) => !value);
    }

    public toggleNavigation(): void {
        this.profileOpen.set(false);
        this.sidebarOpen.set(false);

        this.navigationOpen.update((value: boolean) => !value);
    }

    public toggleProfile(): void {
        this.navigationOpen.set(false);

        this.profileOpen.update((value: boolean) => !value);
    }

    public closeDropdown(): void {
        this.profileOpen.set(false);
        this.navigationOpen.set(false);
    }
}
