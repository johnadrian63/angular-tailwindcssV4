import { Component, signal, WritableSignal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

import { IDropdownMenu, DropdownMenu } from "../../shared/dropdown-menu/dropdown.menu";
import { menuData } from "../../shared/menu.data";

@Component({
    selector: "app-material-menu-dynamic",
    styleUrl: "./material.menu.dynamic.css",
    templateUrl: "./material.menu.dynamic.html",
    imports: [MatButtonModule, MatMenuModule, DropdownMenu],
})
export class MaterialMenuDynamic {
    public readonly menuList: WritableSignal<IDropdownMenu[]> = signal<IDropdownMenu[]>(menuData);
}
