import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { IMenuItem, INavigationService } from "../../navigation.model";
import { NavigationHorizontalCdkLink } from "./link/navigation.horizontal.cdk.link";
import { NavigationHorizontalCdkDropdown } from "./dropdown/navigation.horizontal.cdk.dropdown";

@Injectable()
export abstract class NavigationHorizontalCdkService implements INavigationService {
    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handle(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleNested(vcr, data);
        } else {
            this.handleSingle(vcr, data);
        }
    }

    public handleNested(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationHorizontalCdkDropdown);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleSingle(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationHorizontalCdkLink);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }
}
