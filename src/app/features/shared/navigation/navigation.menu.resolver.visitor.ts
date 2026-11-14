export interface INavigationMenuResolverVisitor<T> {
    visitNested(): T;
    visitSingle(): T;
    visitSubNested(): T;
    visitSubSingle(): T;
    visitCustom(): T;
}

export abstract class NavigationMenuResolver {
    public abstract accept<T>(visitor: INavigationMenuResolverVisitor<T>): T;
}

export class NavigationMenuNested extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitNested();
    }
}

export class NavigationMenuSingle extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitSingle();
    }
}

export class NavigationMenuSubSingle extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitSubSingle();
    }
}

export class NavigationMenuSubNested extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitSubNested();
    }
}

export class NavigationMenuCustom extends NavigationMenuResolver {
    public accept<T>(visitor: INavigationMenuResolverVisitor<T>): T {
        return visitor.visitCustom();
    }
}

