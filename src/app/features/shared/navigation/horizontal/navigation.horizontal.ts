import { Component, inject, input, InputSignal, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenu, MatMenuModule } from "@angular/material/menu";

import { IMenuItem } from "../navigation.model";
import { NavigationHorizontalService } from "./navigation.horizontal.service";
import { NavigationMenuResolver } from "./navigation.horizontal.resolver";

export interface IDropdownMenu {
    label: string;
    text: string;
    children?: IDropdownMenu[];
}

@Component({
    selector: "app-navigation-horizontal",
    styleUrl: "./navigation.horizontal.css",
    templateUrl: "./navigation.horizontal.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationMenuResolver
    ],
})
export class NavigationHorizontal {

    public get menus(): IMenuItem[] {
        return this.navigationMenuService.data();
    }

    public readonly navigationMenuService: NavigationHorizontalService = inject<NavigationHorizontalService>(NavigationHorizontalService);
    // public readonly menus: InputSignal<IDropdownMenu[]> = input<IDropdownMenu[]>([]);

    public items = viewChild<MatMenu>("items");
}
