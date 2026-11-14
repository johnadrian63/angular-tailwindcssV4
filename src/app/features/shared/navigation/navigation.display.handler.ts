import { Type } from "@angular/core";

import { IMenuItem } from "./navigation.model";
import { NavigationDisplay } from "./display/navigation.display";
import { NavigationDisplayButton } from "./display/button/navigation.display.button";
import { NavigationDisplayExpand } from './display/expand/navigation.display.expand';
import { NavigationDisplayLink } from "./display/link/navigation.display.link";
import { NavigationMenuDropdown } from "./display/menu-dropdown/navigation.menu.dropdown";
import { NavigationDisplayText } from "./display/text/navigation.display.text";

export interface INavigationDisplayHandlerVisitor<T> {
    visitButton(handler: NavigationDisplayButtonHandler): T;
    visitExpand(handler: NavigationDisplayExpandHandler): T;
    visitLink(handler: NavigationDisplayLinkHandler): T;
    visitMenuDropdown(handler: NavigationDisplayMenuDropdownHandler): T;
    visitText(handler: NavigationDisplayTextHandler): T;
}

export abstract class NavigationDisplayHandler {
    constructor(public readonly menu: IMenuItem) { }

    public abstract renderer: Type<NavigationDisplay>;

    public abstract accept<T>(visitor: INavigationDisplayHandlerVisitor<T>): T;
}

export class NavigationDisplayButtonHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationDisplay> = NavigationDisplayButton;

    public accept<T>(visitor: INavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitButton(this);
    }
}

export class NavigationDisplayExpandHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationDisplay> = NavigationDisplayExpand;

    public accept<T>(visitor: INavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitExpand(this);
    }
}

export class NavigationDisplayLinkHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationDisplay> = NavigationDisplayLink;

    public accept<T>(visitor: INavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitLink(this);
    }
}

export class NavigationDisplayMenuDropdownHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationDisplay> = NavigationMenuDropdown;

    public accept<T>(visitor: INavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitMenuDropdown(this);
    }
}

export class NavigationDisplayTextHandler extends NavigationDisplayHandler {
    public readonly renderer: Type<NavigationDisplay> = NavigationDisplayText;

    public accept<T>(visitor: INavigationDisplayHandlerVisitor<T>): T {
        return visitor.visitText(this);
    }
}

// export class NavigationDisplayCustomHandler extends NavigationDisplayHandler {

//     public get renderer(): Type<NavigationDisplay> {
//         return this.menu.handler;
//     };

//     constructor(menu: IMenuItem) {
//         super(menu);
//     }

//     public accept<T>(visitor: INavigationDisplayHandlerVisitor<T>): T {
//         return visitor.visitCustom(this);
//     }
// }
