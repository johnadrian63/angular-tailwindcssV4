import { Component, model, output } from "@angular/core";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";

import { IMenuItem } from "../navigation.model";
import { NgClass } from "@angular/common";

@Component({
    selector: "app-navigation-expand",
    templateUrl: "./navigation.expand.html",
    imports: [NgClass, FaIconComponent]
})
export class NavigationExpand {
    public readonly menu = model.required<IMenuItem>();
    public classes: string = "";
    public readonly onExpand = output<IMenuItem>();
    public readonly faAngleRightIcon = faAngleRight;
}
