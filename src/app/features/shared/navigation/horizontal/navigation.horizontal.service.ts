import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationLink } from "../link/navigation.link";
import { IMenuItem, INavigationService } from "../navigation.model";
import { NavigationMenuDropdown } from "../menu-dropdown/navigation.menu.dropdown";

@Injectable()
export abstract class NavigationHorizontalService implements INavigationService {

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handleData(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleExpand(vcr, data);
        } else {
            this.handleLink(vcr, data);
        }
    }

    public handleExpand(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationMenuDropdown);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleLink(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationLink);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }
}
