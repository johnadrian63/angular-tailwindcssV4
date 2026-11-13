import { ComponentRef } from "@angular/core";

import { NavigationDisplay } from "../../display/navigation.display";
import { NavigationDisplayExpand } from "../../display/expand/navigation.display.expand"
import { NavigationDisplayLink } from "../../display/link/navigation.display.link";
import { NavigationHorizontalCdkDropdown } from "./dropdown/navigation.horizontal.cdk.dropdown";
import { IMenuItem, INavigationMenuResolverVisitor, NavigationMenuNested, NavigationMenuSingle, NavigationMenuSubNested, NavigationMenuSubSingle } from "../../navigation.model";


export class NavigationHorizontalCdkResolverVisitor implements INavigationMenuResolverVisitor<void> {
    public visitNested(renderer: NavigationMenuNested): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(NavigationHorizontalCdkDropdown, {
            injector: renderer.vcr.injector
        });

        this.renderComponent(componentRef, renderer.item);
    }

    public visitSingle(renderer: NavigationMenuSingle): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(NavigationDisplayLink, {
            injector: renderer.vcr.injector
        });

        this.renderComponent(componentRef, renderer.item);
    }

    public visitSubNested(renderer: NavigationMenuSubNested): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(NavigationDisplayExpand, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        this.renderComponent(componentRef, renderer.item);
    }

    public visitSubSingle(renderer: NavigationMenuSubSingle): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(NavigationDisplayLink, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        this.renderComponent(componentRef, renderer.item);
    }

    public visitCustom(renderer: NavigationMenuSubNested): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(renderer.item.renderer!, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        this.renderComponent(componentRef, renderer.item);
    }

    protected renderComponent(componentRef: ComponentRef<NavigationDisplay>, item: IMenuItem): void {
        componentRef.instance.menu.set(item);

        componentRef.changeDetectorRef.detectChanges();
    }
}