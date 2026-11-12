import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationDisplayLink } from "../display/link/navigation.display.link";
import { IMenuItem, INavigationService } from "../navigation.model";
import { NavigationMenuDropdown } from "../display/menu-dropdown/navigation.menu.dropdown";

@Injectable()
export abstract class NavigationHorizontalService implements INavigationService {

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleNested(vcr, data);
        } else {
            this.handleSingle(vcr, data);
        }
    }

    public handleSingle(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationDisplayLink);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleNested(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationMenuDropdown);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }
}
