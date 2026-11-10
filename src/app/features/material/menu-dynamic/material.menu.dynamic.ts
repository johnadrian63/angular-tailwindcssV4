import { Component, signal, WritableSignal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

import { menuData } from "../../shared/menu.data";
import { IDropdownMenu, NavigationMenu } from "../../shared/navigation-menu/navigation.menu";

@Component({
    selector: "app-material-menu-dynamic",
    styleUrl: "./material.menu.dynamic.css",
    templateUrl: "./material.menu.dynamic.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationMenu
    ],
})
export class MaterialMenuDynamic {
    public readonly menuList: WritableSignal<IDropdownMenu[]> = signal<IDropdownMenu[]>(menuData);
}
