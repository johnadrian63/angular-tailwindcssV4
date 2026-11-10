import { Component, input, InputSignal, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenu, MatMenuModule } from "@angular/material/menu";

export interface IDropdownMenu {
    label: string;
    text: string;
    children?: IDropdownMenu[];
}

@Component({
    selector: "app-navigation-menu",
    styleUrl: "./navigation.menu.css",
    templateUrl: "./navigation.menu.html",
    imports: [
        MatButtonModule,
        MatMenuModule
    ],
})
export class NavigationMenu {
    public readonly menus: InputSignal<IDropdownMenu[]> = input<IDropdownMenu[]>([]);

    public items = viewChild<MatMenu>("items");
}
