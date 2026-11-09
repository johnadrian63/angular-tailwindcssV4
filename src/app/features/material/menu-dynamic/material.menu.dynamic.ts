import { Component } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

@Component({
    imports: [MatButtonModule, MatMenuModule],
    selector: "app-material-menu-dynamic",
    styleUrl: "./material.menu.dynamic.css",
    templateUrl: "./material.menu.dynamic.html",
})
export class MaterialMenuDynamic { }
