import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { NavigationDisplay } from "../navigation.display";

@Component({
    selector: "app-navigation-display-link",
    templateUrl: "./navigation.display.link.html",
    imports: [RouterLink, NgClass]
})
export class NavigationDisplayLink extends NavigationDisplay {
    public readonly faAngleRightIcon = faAngleRight;
}
