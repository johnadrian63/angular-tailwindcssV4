import { ComponentRef } from "@angular/core";

import { IMenuItem } from "../../navigation.model";
import { NavigationDisplay } from "../../display/navigation.display";
import { NavigationDisplayExpand } from "../../display/expand/navigation.display.expand"
import { NavigationDisplayLink } from "../../display/link/navigation.display.link";
import { NavigationHorizontalCdkDropdown } from "./dropdown/navigation.horizontal.cdk.dropdown";
import {
    INavigationResolverVisitor,
    NavigationNested,
    NavigationSingle,
    NavigationSubNested,
    NavigationSubSingle
} from "./resolver/navigation.horizontal.cdk.resolver.model";

export class NavigationHorizontalCdkResolverVisitor implements INavigationResolverVisitor<void> {

    public visitNested(renderer: NavigationNested): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(NavigationHorizontalCdkDropdown, {
            injector: renderer.vcr.injector
        });

        this.renderComponent(componentRef, renderer.item);
    }

    public visitSingle(renderer: NavigationSingle): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(NavigationDisplayLink, {
            injector: renderer.vcr.injector
        });

        this.renderComponent(componentRef, renderer.item);
    }

    public visitSubNested(renderer: NavigationSubNested): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(NavigationDisplayExpand, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        this.renderComponent(componentRef, renderer.item);
    }

    public visitSubSingle(renderer: NavigationSubSingle): void {
        let componentRef: ComponentRef<NavigationDisplay> = renderer.vcr.createComponent(NavigationDisplayLink, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        this.renderComponent(componentRef, renderer.item);
    }

    public visitCustom(renderer: NavigationSubNested): void {
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