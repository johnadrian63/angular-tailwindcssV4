import { Type, ViewContainerRef } from "@angular/core";

import { NavigationDisplay } from "./display/navigation.display";
import { NavigationDisplayHandler } from "./navigation.display.handler";

export interface IMenuItem {
    label: string;
    text: string;
    path?: string | string[];
    children?: IMenuItem[];
    handler?: Type<NavigationDisplayHandler>;
}

export interface IMenu {
    parent?: IMenuItem;
    children: IMenuItem[];
}


export interface INavigationHandlerService {
    handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler): void;
}