import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
    imports: [RouterModule],
    selector: "app-example-basic",
    styleUrl: "./example.basic.css",
    templateUrl: "./example.basic.html",
})
export class ExampleBasic {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
