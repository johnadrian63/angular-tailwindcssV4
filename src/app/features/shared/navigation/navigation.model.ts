import { ViewContainerRef } from "@angular/core";

export interface IMenuItem {
    label: string;
    text: string;
    children?: IMenuItem[];
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
