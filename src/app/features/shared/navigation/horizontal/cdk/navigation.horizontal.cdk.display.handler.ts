import { Type, ViewContainerRef } from "@angular/core";

import { NavigationHorizontalCdkDropdown } from "./dropdown/navigation.horizontal.cdk.dropdown";
import { NavigationDisplayHandler, INavigationDisplayHandlerVisitor, NavigationDisplayButtonHandler, NavigationDisplayExpandHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler, NavigationDisplayTextHandler } from "../../navigation.display.handler";

export interface INavigationHorizontalCdkDisplayHandlerVisitor<T> extends INavigationDisplayHandlerVisitor<T> {
    visitCdkDropdown(handler: NavigationHorizontalCdkDropdownDisplayHandler): T;
}

export class NavigationHorizontalCdkDropdownDisplayHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationHorizontalCdkDropdown> = NavigationHorizontalCdkDropdown;

    public accept<T>(visitor: INavigationHorizontalCdkDisplayHandlerVisitor<T>): T {
        return visitor.visitCdkDropdown(this);
    }
}

export class NavigationHorizontalCdkDisplayHandlerVisitor implements INavigationHorizontalCdkDisplayHandlerVisitor<void> {
    constructor(protected readonly vcr: ViewContainerRef) { }

    public visitCdkDropdown(handler: NavigationHorizontalCdkDropdownDisplayHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitButton(handler: NavigationDisplayButtonHandler): void {
        throw new Error("visitButton not implemented.");
    }

    public visitExpand(handler: NavigationDisplayExpandHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitLink(handler: NavigationDisplayLinkHandler): void {
        const componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);
        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitMenuDropdown(handler: NavigationDisplayMenuDropdownHandler): void {
        throw new Error("visitMenuDropdown not implemented.");
    }

    public visitText(handler: NavigationDisplayTextHandler): void {
        throw new Error("visitText not implemented.");
    }
}