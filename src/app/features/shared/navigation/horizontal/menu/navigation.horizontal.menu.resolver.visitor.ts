import { IMenuItem } from "../../navigation.model";
import { INavigationMenuResolverVisitor } from "../../navigation.menu.resolver.visitor";
import { NavigationDisplayHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler } from "../../navigation.display.handler";

export class NavigationHorizontalResolverVisitor implements INavigationMenuResolverVisitor<NavigationDisplayHandler> {
    constructor(private readonly menu: IMenuItem) { }

    public visitNested(): NavigationDisplayHandler {
        return new NavigationDisplayMenuDropdownHandler(this.menu);
    }

    public visitSingle(): NavigationDisplayHandler {
        // const componentRef = renderer.vcr.createComponent(NavigationDisplayLink);

        // componentRef.instance.menu.set(renderer.item);

        // componentRef.changeDetectorRef.detectChanges();
        return new NavigationDisplayLinkHandler(this.menu);
    }

    public visitSubNested(): NavigationDisplayHandler {
        throw new Error("visitSubNested not implemented.");
    }

    public visitSubSingle(): NavigationDisplayHandler {
        throw new Error("visitSubSingle not implemented.");
    }

    public visitCustom(): NavigationDisplayHandler {
        throw new Error("visitCustom not implemented.");
    }
}