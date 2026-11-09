import { Component, ElementRef, inject, input, InputSignal, OnInit, Signal, signal, viewChild, ViewChild } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faTableColumns } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: "app-example-responsive-header",
    templateUrl: "./example.responsive.header.html",
    styleUrl: "./example.responsive.header.css",
    imports: [RouterModule, FaIconComponent],

})
export class ExampleResponsiveHeader {
    // @ViewChild("toggleProfileIcon", { read: ElementRef, static: false })
    // public toggleProfileElem!: ElementRef<HTMLElement>;
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

    public ngOnInit(): void {
        // console.log(this.toggleProfileElem);
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

    public closeDropdown(): void {
        this.profileOpen.set(false);
        this.navigationOpen.set(false);
    }
}