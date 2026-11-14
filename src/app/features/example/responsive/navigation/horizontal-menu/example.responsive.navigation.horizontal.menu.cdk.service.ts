import { ComponentRef, Injectable } from "@angular/core";

import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { NavigationHorizontalCdkDropdown } from "../../../../shared/navigation/horizontal/cdk/dropdown/navigation.horizontal.cdk.dropdown";
import { NavigationHorizontalCdkResolverVisitor } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.resolver.visitor";
import { NavigationMenuNested, NavigationMenuResolver } from "../../../../shared/navigation/navigation.menu.resolver.visitor";

class HorizontalNavigationResolverMenuVisitor extends NavigationHorizontalCdkResolverVisitor {
    public override visitNested(renderer: NavigationMenuNested): void {
        let componentRef: ComponentRef<NavigationHorizontalCdkDropdown> = renderer.vcr.createComponent(NavigationHorizontalCdkDropdown, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.menuClass = "mt-2.5";

        this.renderComponent(componentRef, renderer.item);
    }
}

@Injectable()
export class ExampleResponsiveNavigationHorizontalMenuCdkService extends NavigationHorizontalCdkService {
    public override handle(resolver: NavigationMenuResolver): void {
        resolver.accept(new HorizontalNavigationResolverMenuVisitor());
    }
}
