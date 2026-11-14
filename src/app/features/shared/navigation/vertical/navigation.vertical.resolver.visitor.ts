import { IMenuItem } from "../navigation.model";
import { INavigationMenuResolverVisitor } from "../navigation.menu.resolver.visitor";
import { NavigationDisplayExpandHandler, NavigationDisplayHandler, NavigationDisplayLinkHandler } from "../navigation.display.handler";

export class NavigationVerticalResolverVisitor implements INavigationMenuResolverVisitor<NavigationDisplayHandler> {
    constructor(
        private readonly menu: IMenuItem
    ) { }

    public visitNested(): NavigationDisplayHandler {
        // const componentRef = renderer.vcr.createComponent(NavigationDisplayExpand);

        // componentRef.instance.menu.set(renderer.item);
        // componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        // componentRef.instance
        //     .onExpand
        //     .subscribe((data: IMenuItem) => {
        //         this.navigationVerticalService.setMenu(data);
        //     });

        // componentRef.changeDetectorRef.detectChanges();
        return new NavigationDisplayExpandHandler(this.menu);
    }

    public visitSingle(): NavigationDisplayHandler {
        // const componentRef = renderer.vcr.createComponent(NavigationDisplayLink);

        // componentRef.instance.menu.set(renderer.item);
        // componentRef.instance.classes = "p-2 hover:bg-gray-100 flex cursor-pointer";

        // componentRef.changeDetectorRef.detectChanges();
        return new NavigationDisplayLinkHandler(this.menu);
    }

    public visitSubNested(): NavigationDisplayHandler {
        throw new Error("visitSubNested method not implemented.");
    }

    public visitSubSingle(): NavigationDisplayHandler {
        throw new Error("visitSubSingle method not implemented.");
    }

    public visitCustom(): NavigationDisplayHandler {
        throw new Error("visitCustom method not implemented.");
    }
}