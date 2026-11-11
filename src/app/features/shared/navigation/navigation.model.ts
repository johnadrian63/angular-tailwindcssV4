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
    handleData(vcr: ViewContainerRef, data: IMenuItem): void;
    handleExpand(vcr: ViewContainerRef, data: IMenuItem): void;
    handleLink(vcr: ViewContainerRef, data: IMenuItem): void;
}
