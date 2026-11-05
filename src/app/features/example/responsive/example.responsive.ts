import { Component, inject, OnInit, signal } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faBars, faTableColumns } from '@fortawesome/free-solid-svg-icons';

@Component({
    imports: [RouterModule, FaIconComponent],
    selector: "app-example-responsive",
    styleUrl: "./example.responsive.css",
    templateUrl: "./example.responsive.html",
})
export class ExampleResponsive implements OnInit {
    // public readonly faSearchIcon = faSearch;
    public readonly faBarsIcon = faBars;
    public readonly faTableColumnsIcon = faTableColumns;
    public readonly sidebarOpen = signal<boolean>(false);
    public readonly navigationOpen = signal<boolean>(false);
    public readonly profileOpen = signal<boolean>(false);

    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public ngOnInit(): void {
        // this.menuOpen.set(true);
        // this.profileOpen.set(true);
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
