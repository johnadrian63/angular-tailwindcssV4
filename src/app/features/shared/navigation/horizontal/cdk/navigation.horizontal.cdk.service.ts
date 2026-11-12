import { ComponentRef, Injectable, signal, ViewContainerRef, WritableSignal } from "@angular/core";

import { NavigationDisplay } from "../../display/navigation.display";
import { NavigationLink } from "../../display/link/navigation.link";
import { IMenuItem, INavigationService } from "../../navigation.model";
import { NavigationExpand } from "../../display/expand/navigation.expand";
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

    public handleSingle(vcr: ViewContainerRef, data: IMenuItem): void {
        let componentRef: ComponentRef<NavigationDisplay>;

        if (data.renderer) {
            componentRef = vcr.createComponent(data.renderer);
        } else {
            componentRef = vcr.createComponent(NavigationLink);
        }

        this.renderComponent(componentRef, data);
    }

    public handleNested(vcr: ViewContainerRef, data: IMenuItem): void {
        let componentRef: ComponentRef<NavigationDisplay>;

        if (data.renderer) {
            componentRef = vcr.createComponent(data.renderer);
        } else {
            componentRef = vcr.createComponent(NavigationHorizontalCdkDropdown);
        }

        this.renderComponent(componentRef, data);
    }

    public handleSub(vcr: ViewContainerRef, data: IMenuItem): void {
        if (data.children?.length) {
            this.handleSubNested(vcr, data);
        } else {
            this.handleSubSingle(vcr, data);
        }
    }

    public handleSubSingle(vcr: ViewContainerRef, data: IMenuItem): void {
        let componentRef: ComponentRef<NavigationDisplay>;

        if (data.renderer) {
            componentRef = vcr.createComponent(data.renderer);
        } else {
            componentRef = vcr.createComponent(NavigationLink);
        }

        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        this.renderComponent(componentRef, data);
    }

    public handleSubNested(vcr: ViewContainerRef, data: IMenuItem): void {
        let componentRef: ComponentRef<NavigationDisplay>;

        if (data.renderer) {
            componentRef = vcr.createComponent(data.renderer);
        } else {
            componentRef = vcr.createComponent(NavigationExpand);
        }

        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        this.renderComponent(componentRef, data);
    }

    protected renderComponent(componentRef: ComponentRef<NavigationDisplay>, data: IMenuItem): void {
        componentRef.instance.menu.set(data);

        componentRef.changeDetectorRef.detectChanges();
    }
}
