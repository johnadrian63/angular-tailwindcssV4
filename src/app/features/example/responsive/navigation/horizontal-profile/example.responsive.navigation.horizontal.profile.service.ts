import { ComponentRef, Injectable } from "@angular/core";

import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { ExampleResponsiveNavigationHorizontalProfileDropdown } from "./dropdown/example.responsive.navigation.horizontal.profile.dropdown";
import { NavigationHorizontalCdkResolverVisitor } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.resolver.visitor";
import { NavigationNested, NavigationResolver } from "../../../../shared/navigation/horizontal/cdk/resolver/navigation.horizontal.cdk.resolver.model";

class HorizontalNavigationProfileResolverVisitor extends NavigationHorizontalCdkResolverVisitor {
    public override visitNested(renderer: NavigationNested): void {
        let componentRef: ComponentRef<ExampleResponsiveNavigationHorizontalProfileDropdown> = renderer.vcr.createComponent(ExampleResponsiveNavigationHorizontalProfileDropdown, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.menuClass = "mt-2.5";

        this.renderComponent(componentRef, renderer.item);
    }
}

@Injectable()
export class ExampleResponsiveNavigationHorizontalProfileCdkService extends NavigationHorizontalCdkService {
    public override handle(resolver: NavigationResolver): void {
        resolver.accept(new HorizontalNavigationProfileResolverVisitor());
    }
}
