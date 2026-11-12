import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { NavigationDisplay } from "../navigation.display";
import { INavigationDisplayVisitor } from "../navigation.display.model";

@Component({
    selector: "app-navigation-text",
    templateUrl: "./navigation.text.html",
    imports: [RouterLink, NgClass]
})
export class NavigationText extends NavigationDisplay {
    public readonly faAngleRightIcon = faAngleRight;

    public override accept<T>(visitor: INavigationDisplayVisitor<T>): T {
        return visitor.visitText(this);
    }
}
