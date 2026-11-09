import { Component, input, InputSignal, viewChild } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenu, MatMenuModule } from "@angular/material/menu";

export interface IDropdownMenu {
    label: string;
    text: string;
    children?: IDropdownMenu[];
}

@Component({
    selector: "app-dropdown-menu",
    styleUrl: "./dropdown.menu.css",
    templateUrl: "./dropdown.menu.html",
    imports: [MatButtonModule, MatMenuModule],
})
export class DropdownMenu {
    public readonly menus: InputSignal<IDropdownMenu[]> = input<IDropdownMenu[]>([]);

    public items = viewChild<MatMenu>("items");
}
