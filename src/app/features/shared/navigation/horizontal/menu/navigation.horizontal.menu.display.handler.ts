import { INavigationDisplayHandlerVisitor, NavigationDisplayButtonHandler, NavigationDisplayExpandHandler, NavigationDisplayLinkHandler, NavigationDisplayMenuDropdownHandler, NavigationDisplayTextHandler } from "../../navigation.display.handler";

export class NavigationHorizontalCdkDisplayHandlerVisitor implements INavigationDisplayHandlerVisitor<void> {
    public visitButton(handler: NavigationDisplayButtonHandler): void {
        throw new Error("Method not implemented.");
    }

    public visitExpand(handler: NavigationDisplayExpandHandler): void {
        throw new Error("Method not implemented.");
    }

    public visitLink(handler: NavigationDisplayLinkHandler): void {
        throw new Error("Method not implemented.");
    }

    public visitMenuDropdown(handler: NavigationDisplayMenuDropdownHandler): void {
        throw new Error("Method not implemented.");
    }

    public visitText(handler: NavigationDisplayTextHandler): void {
        throw new Error("Method not implemented.");
    }
}