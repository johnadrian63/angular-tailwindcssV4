import { Component, model } from "@angular/core";

import { IMenuItem } from "../navigation.model";

@Component({
    template: ""
})
export abstract class NavigationDisplay {
    public readonly menu = model.required<IMenuItem>();

    public classes: string = "";
}