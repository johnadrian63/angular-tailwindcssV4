import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import { NavigationDisplay } from "../navigation.display";

@Component({
    selector: "app-navigation-display-text",
    templateUrl: "./navigation.display.text.html",
    imports: [RouterLink, NgClass]
})
export class NavigationDisplayText extends NavigationDisplay {
    public readonly faAngleRightIcon = faAngleRight;
}
