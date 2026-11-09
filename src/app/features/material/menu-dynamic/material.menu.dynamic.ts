import { Component, signal, WritableSignal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

import { IDropdownMenu, DropdownMenu } from "../../shared/dropdown-menu/dropdown.menu";

@Component({
    selector: "app-material-menu-dynamic",
    styleUrl: "./material.menu.dynamic.css",
    templateUrl: "./material.menu.dynamic.html",
    imports: [MatButtonModule, MatMenuModule, DropdownMenu],
})
export class MaterialMenuDynamic {
    public readonly menuList: WritableSignal<IDropdownMenu[]> = signal<IDropdownMenu[]>([
        {
            label: "animals",
            text: "Animals",
            children: [
                {
                    label: "sea",
                    text: "Sea",
                    children: [
                        {
                            label: "fish",
                            text: "Fish",
                        },
                        {
                            label: "whale",
                            text: "Whale",
                        },
                        {
                            label: "seal",
                            text: "Seal",
                        },
                    ]
                },
                {
                    label: "land",
                    text: "Land",
                    children: [
                        {
                            label: "dog",
                            text: "Dog",
                        },
                        {
                            label: "cat",
                            text: "Cat",
                        },
                    ]
                },
                {
                    label: "insects",
                    text: "Insects",
                    children: [
                        {
                            label: "mosquito",
                            text: "Mosquito"
                        },
                        {
                            label: "dragonfly",
                            text: "Dragonfly",
                            children: [
                                {
                                    label: "blueDragonfly",
                                    text: "Blue Dragonfly"
                                },
                                {
                                    label: "redDragonfly",
                                    text: "Red Dragonfly",
                                    children: [
                                        {
                                            label: "redOrangeDragonFly",
                                            text: "Red-orange Dragonfly"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            label: "vehicles",
            text: "Vehicles",
            children: [
                {
                    label: "cars",
                    text: "Cars",
                    children: [
                        {
                            label: "suzuki",
                            text: "Suzuki",
                        },
                        {
                            label: "bmw",
                            text: "BMW"
                        }
                    ]
                },
                {
                    label: "motorcycles",
                    text: "Motorcycles",
                    children: [
                        {
                            label: "honda",
                            text: "Honda",
                        },
                        {
                            label: "yamaha",
                            text: "Yamaha",
                        },
                    ]
                },
            ]
        },
        {
            label: "building",
            text: "Buildings",
        }
    ]);
}
