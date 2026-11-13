import { Type, ViewContainerRef } from "@angular/core";

import { NavigationDisplay } from "./display/navigation.display";

export interface IMenuItem {
    label: string;
    text: string;
    path?: string | string[];
    children?: IMenuItem[];
    renderer?: Type<NavigationDisplay>;
}

export interface IMenu {
    parent?: IMenuItem;
    children: IMenuItem[];
}

export interface INavigationMenuResolverVisitor<T> {
    visitNested(renderer: NavigationMenuNested): T;
    visitSingle(renderer: NavigationMenuSingle): T;
    visitSubNested(renderer: NavigationMenuSubNested): T;
    visitSubSingle(renderer: NavigationMenuSubSingle): T;
    visitCustom(renderer: NavigationMenuCustom): T;
}

export abstract class NavigationMenuResolver {
    constructor(public vcr: ViewContainerRef, public item: IMenuItem) { }

    public abstract accept<T>(visitor: INavigationMenuResolverVisitor<T>): T;
}

export class NavigationMenuNested extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitNested(this);
    }
}

export class NavigationMenuSingle extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitSingle(this);
    }
}

export class NavigationMenuSubSingle extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitSubSingle(this);
    }
}

export class NavigationMenuSubNested extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitSubNested(this);
    }
}

export class NavigationMenuCustom extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitCustom(this);
    }
}

