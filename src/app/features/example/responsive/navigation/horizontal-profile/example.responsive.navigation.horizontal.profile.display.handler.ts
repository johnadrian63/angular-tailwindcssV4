import { Type, ViewContainerRef } from "@angular/core";

import { ExampleResponsiveNavigationHorizontalProfileDropdown } from "./dropdown/example.responsive.navigation.horizontal.profile.dropdown";
import { INavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDropdownDisplayHandler } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";

export interface IExampleResponsiveNavigationHorizontalProfileDisplayHandlerVisitor<T> extends INavigationHorizontalCdkDisplayHandlerVisitor<T> {
    visitProfileDropdown(handler: ExampleResponsiveNavigationHorizontalProfileDisplayHandler): T;
}

export class ExampleResponsiveNavigationHorizontalProfileDisplayHandler extends NavigationHorizontalCdkDropdownDisplayHandler {
    public override readonly renderer: Type<ExampleResponsiveNavigationHorizontalProfileDropdown> = ExampleResponsiveNavigationHorizontalProfileDropdown;

    public override accept<T>(visitor: IExampleResponsiveNavigationHorizontalProfileDisplayHandlerVisitor<T>): T {
        return visitor.visitProfileDropdown(this);
    }
}

export class ExampleResponsiveNavigationHorizontalProfileDisplayHandlerVisitor extends NavigationHorizontalCdkDisplayHandlerVisitor implements IExampleResponsiveNavigationHorizontalProfileDisplayHandlerVisitor<void> {
    constructor(vcr: ViewContainerRef) {
        super(vcr);
    }

    public visitProfileDropdown(handler: ExampleResponsiveNavigationHorizontalProfileDisplayHandler): void {
        let componentRef = this.vcr.createComponent(handler.renderer, {
            injector: this.vcr.injector
        });

        componentRef.instance.menu.set(handler.menu);

        componentRef.instance.menuClass = "mt-2.5";
        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");
    }
}