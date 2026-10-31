import { Component, signal } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
    imports: [RouterOutlet, RouterModule],
    selector: "app-flex",
    styleUrl: "./flex.css",
    templateUrl: "./flex.html",
})
export class Flex {
}
