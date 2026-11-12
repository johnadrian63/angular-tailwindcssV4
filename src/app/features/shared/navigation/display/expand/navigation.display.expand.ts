import { Component, output } from "@angular/core";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgClass } from "@angular/common";

import { IMenuItem } from "../../navigation.model";
import { NavigationDisplay } from "../navigation.display";
@Component({
    selector: "app-navigation-display-expand",
    templateUrl: "./navigation.display.expand.html",
    imports: [NgClass, FaIconComponent]
})
export class NavigationDisplayExpand extends NavigationDisplay {
    public readonly onExpand = output<IMenuItem>();

    public expandIcon = faAngleRight;
}
