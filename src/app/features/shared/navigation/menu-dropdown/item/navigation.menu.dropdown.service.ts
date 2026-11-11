import { Injectable, ViewContainerRef } from "@angular/core";
import { IMenuItem } from "../../navigation.model";

@Injectable()
export abstract class NavigationMenuDropdownItemService {
    public handleData(vcr: ViewContainerRef, data: IMenuItem): void {

    }
}