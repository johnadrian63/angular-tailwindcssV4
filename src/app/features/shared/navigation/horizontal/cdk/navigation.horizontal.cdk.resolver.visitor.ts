
import { IMenuItem } from "../../navigation.model";
import { INavigationMenuResolverVisitor } from "../../navigation.menu.resolver.visitor";
import { NavigationDisplayExpandHandler, NavigationDisplayLinkHandler } from "../../navigation.display.handler";
import { NavigationHorizontalCdkDropdownDisplayHandler } from "./navigation.horizontal.cdk.display.handler";

export class NavigationHorizontalCdkResolverVisitor implements INavigationMenuResolverVisitor<NavigationHorizontalCdkDropdownDisplayHandler> {
    constructor(private readonly menu: IMenuItem) { }

    public visitNested(): NavigationHorizontalCdkDropdownDisplayHandler {
        return new NavigationHorizontalCdkDropdownDisplayHandler(this.menu);
    }

    public visitSingle(): NavigationHorizontalCdkDropdownDisplayHandler {
        return new NavigationDisplayLinkHandler(this.menu);
    }

    public visitSubNested(): NavigationHorizontalCdkDropdownDisplayHandler {
        return new NavigationDisplayExpandHandler(this.menu);
    }

    public visitSubSingle(): NavigationHorizontalCdkDropdownDisplayHandler {
        return new NavigationDisplayLinkHandler(this.menu);
    }

    public visitCustom(): NavigationHorizontalCdkDropdownDisplayHandler {

        if (this.menu.handler) {
            return new this.menu.handler(this.menu);
        }

        throw new Error("handler is not defined.");
    }
}
