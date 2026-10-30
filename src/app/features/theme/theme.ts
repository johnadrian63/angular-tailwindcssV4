import { Component } from "@angular/core";
import { RouterModule, RouterOutlet } from "@angular/router";

@Component({
    imports: [RouterOutlet, RouterModule],
    selector: "app-theme",
    styleUrl: "./theme.css",
    templateUrl: "./theme.html",
})
export class Theme { }
