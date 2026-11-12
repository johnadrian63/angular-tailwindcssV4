import { Component, model, output } from "@angular/core";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgClass } from "@angular/common";

import { IMenuItem } from "../../navigation.model";

@Component({
    selector: "app-navigation-expand",
    templateUrl: "./navigation.expand.html",
    imports: [NgClass, FaIconComponent]
})
export class NavigationExpand {
    public readonly menu = model.required<IMenuItem>();
    public classes: string = "";
    public expandIcon = faAngleRight;
    public readonly onExpand = output<IMenuItem>();
}
