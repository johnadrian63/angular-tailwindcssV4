import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { NavigationDisplay } from "../navigation.display";

@Component({
    selector: "app-navigation-display-button",
    templateUrl: "./navigation.display.button.html",
    imports: [NgClass, RouterLink]
})
export class NavigationDisplayButton extends NavigationDisplay {
    public readonly faAngleRightIcon = faAngleRight;
}
