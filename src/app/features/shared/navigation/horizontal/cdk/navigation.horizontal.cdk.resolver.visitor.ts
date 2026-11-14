
import { IMenuItem } from "../../navigation.model";
import { INavigationMenuResolverVisitor } from "../../navigation.menu.resolver.visitor";
import { NavigationHorizontalCdkDropdownDisplayHandler } from "./navigation.horizontal.cdk.display.handler";
import { NavigationDisplayExpandHandler, NavigationDisplayHandler, NavigationDisplayLinkHandler } from "../../navigation.display.handler";

export class NavigationHorizontalCdkResolverVisitor implements INavigationMenuResolverVisitor<NavigationDisplayHandler> {
    constructor(private readonly menu: IMenuItem) { }

    public visitNested(): NavigationDisplayHandler {
        return new NavigationHorizontalCdkDropdownDisplayHandler(this.menu);
    }

    public visitSingle(): NavigationDisplayHandler {
        return new NavigationDisplayLinkHandler(this.menu);
    }

    public visitSubNested(): NavigationDisplayHandler {
        return new NavigationDisplayExpandHandler(this.menu);
    }

    public visitSubSingle(): NavigationDisplayHandler {
        return new NavigationDisplayLinkHandler(this.menu);
    }

    public visitCustom(): NavigationDisplayHandler {
        return new this.menu.handler!(this.menu);
    }
}
