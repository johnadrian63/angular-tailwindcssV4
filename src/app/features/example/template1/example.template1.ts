import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterModule } from "@angular/router";

@Component({
    imports: [RouterModule],
    selector: "app-example-template1",
    styleUrl: "./example.template1.css",
    templateUrl: "./example.template1.html",
})
export class ExampleTemplate1 {
    public readonly activatedRoute: ActivatedRoute = inject<ActivatedRoute>(ActivatedRoute);
}
