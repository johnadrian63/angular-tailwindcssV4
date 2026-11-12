import { Type, ViewContainerRef } from "@angular/core";

import { NavigationDisplay } from "./display/navigation.display";

export interface IMenuItem {
    label: string;
    text: string;
    children?: IMenuItem[];
    renderer?: Type<NavigationDisplay>;
}

export interface IMenu {
    parent?: IMenuItem;
    children: IMenuItem[];
}

export interface INavigationService {
    handle(vcr: ViewContainerRef, data: IMenuItem): void;
    handleNested(vcr: ViewContainerRef, data: IMenuItem): void;
    handleSingle(vcr: ViewContainerRef, data: IMenuItem): void;
}
