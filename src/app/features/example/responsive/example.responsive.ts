import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
    imports: [RouterModule],
    selector: "app-example-responsive",
    styleUrl: "./example.responsive.css",
    templateUrl: "./example.responsive.html",
})
export class ExampleResponsive {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);

    public getRange(range: number): any[] {
        return [...Array(range).keys()];
    }
}
