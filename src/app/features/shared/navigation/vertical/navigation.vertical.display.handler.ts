import { ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../navigation.model";
import { NavigationVerticalService } from "./navigation.vertical.service";
import { INavigationDisplayHandlerVisitor, NavigationDisplayButtonHandler, NavigationDisplayExpandHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler, NavigationDisplayTextHandler } from "../navigation.display.handler";

export class NavigationVerticalDisplayHandler implements INavigationDisplayHandlerVisitor<void> {
    constructor(
        private readonly vcr: ViewContainerRef,
        private readonly navigationVerticalService: NavigationVerticalService
    ) { }

    public visitButton(handler: NavigationDisplayButtonHandler): void {
        throw new Error("visitButton not implemented.");
    }

    public visitExpand(handler: NavigationDisplayExpandHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.instance
            .onExpand
            .subscribe((menu: IMenuItem) => {
                this.navigationVerticalService.setMenu(menu);
            });

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitLink(handler: NavigationDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitMenuDropdown(handler: NavigationDisplayMenuDropdownHandler): void {
        throw new Error("visitMenuDropdown not implemented.");
    }

    public visitText(handler: NavigationDisplayTextHandler): void {
        throw new Error("visitText not implemented.");
    }
}