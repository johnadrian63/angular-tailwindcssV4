import { ViewContainerRef } from "@angular/core";

import { IMenuItem } from "./navigation.model";

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

