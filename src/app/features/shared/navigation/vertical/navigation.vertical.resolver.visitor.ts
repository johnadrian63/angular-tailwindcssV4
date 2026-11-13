import { NavigationDisplayExpand } from "../display/expand/navigation.display.expand";
import { NavigationDisplayLink } from "../display/link/navigation.display.link";

import { NavigationVerticalService } from "./navigation.vertical.service";
import { IMenuItem, INavigationMenuResolverVisitor, NavigationMenuCustom, NavigationMenuNested, NavigationMenuSingle, NavigationMenuSubNested, NavigationMenuSubSingle } from "../navigation.model";

export class NavigationVerticalResolverVisitor implements INavigationMenuResolverVisitor<void> {
    constructor(
        private readonly navigationVerticalService: NavigationVerticalService
    ) { }

    public visitNested(renderer: NavigationMenuNested): void {
        const componentRef = renderer.vcr.createComponent(NavigationDisplayExpand);

        componentRef.instance.menu.set(renderer.item);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.instance
            .onExpand
            .subscribe((data: IMenuItem) => {
                this.navigationVerticalService.setMenu(data);
            });

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitSingle(renderer: NavigationMenuSingle): void {
        const componentRef = renderer.vcr.createComponent(NavigationDisplayLink);

        componentRef.instance.menu.set(renderer.item);
        componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitSubNested(renderer: NavigationMenuSubNested): void {
        // do nothing
    }

    public visitSubSingle(renderer: NavigationMenuSubSingle): void {
        // do nothing
    }

    public visitCustom(renderer: NavigationMenuCustom): void {
        // do nothing
    }
}