import { ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../navigation.model";

export interface INavigationResolverVisitor<T> {
    visitNested(renderer: NavigationNested): T;
    visitSingle(renderer: NavigationSingle): T;

    visitSubNested(renderer: NavigationSubNested): T;
    visitSubSingle(renderer: NavigationSubSingle): T;

    visitCustom(renderer: NavigationCustom): T;
}

export abstract class NavigationResolver {
    constructor(public vcr: ViewContainerRef, public item: IMenuItem) { }

    public abstract accept<T>(visitor: INavigationResolverVisitor<T>): T;
}

export class NavigationNested extends NavigationResolver {
    public accept<T>(visitor: INavigationResolverVisitor<T>): T {
        return visitor.visitNested(this);
    }
}

export class NavigationSingle extends NavigationResolver {
    public accept<T>(visitor: INavigationResolverVisitor<T>): T {
        return visitor.visitSingle(this);
    }
}

export class NavigationSubSingle extends NavigationResolver {
    public accept<T>(visitor: INavigationResolverVisitor<T>): T {
        return visitor.visitSubSingle(this);
    }
}

export class NavigationSubNested extends NavigationResolver {
    public accept<T>(visitor: INavigationResolverVisitor<T>): T {
        return visitor.visitSubNested(this);
    }
}

export class NavigationCustom extends NavigationResolver {
    public accept<T>(visitor: INavigationResolverVisitor<T>): T {
        return visitor.visitCustom(this);
    }
}


