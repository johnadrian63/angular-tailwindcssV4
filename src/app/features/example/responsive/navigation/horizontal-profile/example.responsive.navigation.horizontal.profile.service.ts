import { ComponentRef, Injectable } from "@angular/core";

import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { ExampleResponsiveNavigationHorizontalProfileDropdown } from "./dropdown/example.responsive.navigation.horizontal.profile.dropdown";
import { NavigationHorizontalCdkResolverVisitor } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.resolver.visitor";
import { NavigationMenuNested, NavigationMenuResolver } from "../../../../shared/navigation/navigation.menu.resolver.visitor";

class HorizontalNavigationProfileResolverVisitor extends NavigationHorizontalCdkResolverVisitor {
    public override visitNested(renderer: NavigationMenuNested): void {
        let componentRef: ComponentRef<ExampleResponsiveNavigationHorizontalProfileDropdown> = renderer.vcr.createComponent(ExampleResponsiveNavigationHorizontalProfileDropdown, {
            injector: renderer.vcr.injector
        });

        componentRef.instance.menuClass = "mt-2.5";
        componentRef.instance.classes = "px-3 py-1 flex";

        componentRef.location.nativeElement.classList.add("w-full");

        this.renderComponent(componentRef, renderer.item);
    }
}

@Injectable()
export class ExampleResponsiveNavigationHorizontalProfileCdkService extends NavigationHorizontalCdkService {
    public override handle(resolver: NavigationMenuResolver): void {
        resolver.accept(new HorizontalNavigationProfileResolverVisitor());
    }
}
