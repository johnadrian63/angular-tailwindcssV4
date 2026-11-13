import { ComponentRef, Injectable } from "@angular/core";

import { NavigationHorizontalCdkDropdown } from "../../../../shared/navigation/horizontal/cdk/dropdown/navigation.horizontal.cdk.dropdown";
import { NavigationNested, NavigationResolver } from "../../../../shared/navigation/horizontal/cdk/resolver/navigation.horizontal.cdk.resolver.model";
import { NavigationHorizontalCdkService, NavigationResolverVisitor } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";

class HorizontalNavigationResolverMenuVisitor extends NavigationResolverVisitor {
    public override visitNested(renderer: NavigationNested): void {
        let componentRef: ComponentRef<NavigationHorizontalCdkDropdown> = renderer.vcr.createComponent(NavigationHorizontalCdkDropdown, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.menuClass = "mt-2.5";

        this.renderComponent(componentRef, renderer.item);
    }
}

@Injectable()
export class ExampleResponsiveNavigationHorizontalMenuCdkService extends NavigationHorizontalCdkService {

    public override handle(resolver: NavigationResolver): void {
        resolver.accept(new HorizontalNavigationResolverMenuVisitor());
    }
}
