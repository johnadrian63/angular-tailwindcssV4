import { Component, model } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { INavigationDisplayVisitor } from "./navigation.display.model";

@Component({
    template: ""
})
export abstract class NavigationDisplay {
    public readonly menu = model.required<IMenuItem>();

    public classes: string = "";

    public abstract accept<T>(visitor: INavigationDisplayVisitor<T>): T;
}