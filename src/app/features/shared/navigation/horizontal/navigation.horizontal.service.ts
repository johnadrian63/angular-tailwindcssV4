import { Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";
import { IMenuItem } from "../navigation.model";
import { NavigationExpand } from "../expand/navigation.expand";
import { NavigationLink } from "../link/navigation.link";

@Injectable()
export abstract class NavigationHorizontalService {

    public readonly data: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>([]);

    public handleData(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleExpand(vcr, data);
        } else {
            this.handleLink(vcr, data);
        }
    }

    public handleExpand(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationExpand);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }

    public handleLink(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationLink);

        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }
}
