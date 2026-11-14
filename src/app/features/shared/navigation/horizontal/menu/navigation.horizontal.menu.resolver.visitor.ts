import { NavigationDisplayLink } from "../../display/link/navigation.display.link";
import { NavigationMenuDropdown } from "../../display/menu-dropdown/navigation.menu.dropdown";
import { INavigationMenuResolverVisitor, NavigationMenuNested, NavigationMenuSingle, NavigationMenuSubNested, NavigationMenuSubSingle, NavigationMenuCustom } from "../../navigation.menu.resolver.visitor";

export class NavigationHorizontalResolverVisitor implements INavigationMenuResolverVisitor<void> {
    public visitNested(renderer: NavigationMenuNested): void {
        const componentRef = renderer.vcr.createComponent(NavigationMenuDropdown);

        componentRef.instance.menu.set(renderer.item);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitSingle(renderer: NavigationMenuSingle): void {
        const componentRef = renderer.vcr.createComponent(NavigationDisplayLink);

        componentRef.instance.menu.set(renderer.item);

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