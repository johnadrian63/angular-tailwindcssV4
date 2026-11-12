import { Component, output } from "@angular/core";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
import { NgClass } from "@angular/common";

import { IMenuItem } from "../../navigation.model";
import { NavigationDisplay } from "../navigation.display";
import { INavigationDisplayVisitor } from "../navigation.display.model";

@Component({
    selector: "app-navigation-expand",
    templateUrl: "./navigation.expand.html",
    imports: [NgClass, FaIconComponent]
})
export class NavigationExpand extends NavigationDisplay {
    public readonly onExpand = output<IMenuItem>();

    public expandIcon = faAngleRight;

    public override accept<T>(visitor: INavigationDisplayVisitor<T>): T {
        return visitor.visitExpand(this);
    }
}
