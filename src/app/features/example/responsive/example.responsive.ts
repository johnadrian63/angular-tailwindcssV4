import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";
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

    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public getRange(range: number): any[] {
        return [...Array(range).keys()];
    }
}
