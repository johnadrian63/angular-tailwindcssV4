import { NgClass } from "@angular/common";
import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { NavigationDisplay } from "../navigation.display";
import { INavigationDisplayVisitor } from "../navigation.display.model";

@Component({
    selector: "app-navigation-link",
    templateUrl: "./navigation.link.html",
    imports: [RouterLink, NgClass]
})
export class NavigationLink extends NavigationDisplay {
    public readonly faAngleRightIcon = faAngleRight;

    public override accept<T>(visitor: INavigationDisplayVisitor<T>): T {
        return visitor.visitLink(this);
    }
}
