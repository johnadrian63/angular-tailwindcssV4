import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationHorizontalCdkLink } from "./link/navigation.horizontal.cdk.link";
import { NavigationHorizontalCdkDropdown } from "./dropdown/navigation.horizontal.cdk.dropdown";

@Injectable()
export abstract class NavigationHorizontalCdkService {
    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handleData(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleExpand(vcr, data);
        } else {
            this.handleLink(vcr, data);
        }
    }

    public handleExpand(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationHorizontalCdkDropdown);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleLink(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationHorizontalCdkLink);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }
}
