import { Type, ViewContainerRef } from "@angular/core";

import { NavigationDisplay } from "./display/navigation.display";

export interface IMenuItem {
    label: string;
    text: string;
    path?: string | string[];
    children?: IMenuItem[];
    renderer?: Type<NavigationDisplay>;
}

export interface IMenu {
    parent?: IMenuItem;
    children: IMenuItem[];
}
