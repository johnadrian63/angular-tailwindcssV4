import { Component, model, output } from "@angular/core";
import { NgClass } from "@angular/common";
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenuItem } from "../../navigation.model";

@Component({
    selector: "app-navigation-horizontal-cdk-link",
    styleUrl: "./navigation.horizontal.cdk.link.css",
    templateUrl: "./navigation.horizontal.cdk.link.html",
    imports: [NgClass]
})
export class NavigationHorizontalCdkLink {
    public readonly menu = model.required<IMenuItem>();

    public classes: string = "";
}
