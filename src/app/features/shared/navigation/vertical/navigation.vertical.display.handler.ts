import { ViewContainerRef } from "@angular/core";

import { INavigationDisplayHandlerVisitor, NavigationDisplayButtonHandler, NavigationDisplayExpandHandler, NavigationDisplayHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler, NavigationDisplayTextHandler } from "../navigation.display.handler";

export class NavigationVerticalDisplayHandler implements INavigationDisplayHandlerVisitor<NavigationDisplayHandler> {
    constructor(private readonly vcr: ViewContainerRef) { }

    public visitButton(handler: NavigationDisplayButtonHandler): NavigationDisplayHandler {
        throw new Error("visitButton not implemented.");
    }

    public visitExpand(handler: NavigationDisplayExpandHandler): NavigationDisplayHandler {
        throw new Error("visitExpand not implemented.");
    }

    public visitLink(handler: NavigationDisplayLinkHandler): NavigationDisplayHandler {
        throw new Error("visitLink not implemented.");
    }

    public visitMenuDropdown(handler: NavigationDisplayMenuDropdownHandler): NavigationDisplayHandler {
        throw new Error("visitMenuDropdown not implemented.");
    }

    public visitText(handler: NavigationDisplayTextHandler): NavigationDisplayHandler {
        throw new Error("visitText not implemented.");
    }
}