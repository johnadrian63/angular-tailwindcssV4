import { Component, signal, WritableSignal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

export interface IMenu {
    label: string;
    text: string;
    children?: IMenu[];
}
@Component({
    imports: [MatButtonModule, MatMenuModule],
    selector: "app-material-menu-dynamic",
    styleUrl: "./material.menu.dynamic.css",
    templateUrl: "./material.menu.dynamic.html",
})
export class MaterialMenuDynamic {
    public readonly menuList: WritableSignal<IMenu[]> = signal<IMenu[]>([
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
