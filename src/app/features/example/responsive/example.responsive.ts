import { Component, inject, signal } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faTableColumns } from '@fortawesome/free-solid-svg-icons';

@Component({
    imports: [RouterModule, FaIconComponent],
    selector: "app-example-responsive",
    styleUrl: "./example.responsive.css",
    templateUrl: "./example.responsive.html",
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

    public getRange(range: number): any[] {
        return [...Array(range).keys()];
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
}
