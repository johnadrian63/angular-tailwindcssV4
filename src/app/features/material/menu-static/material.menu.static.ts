import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@Component({
    imports: [MatButtonModule, MatMenuModule],
    selector: "app-material-menu-static",
    styleUrl: "./material.menu.static.css",
    templateUrl: "./material.menu.static.html",
})
export class MaterialMenuStatic { }
