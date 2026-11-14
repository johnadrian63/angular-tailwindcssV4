import { Injectable, ViewContainerRef } from "@angular/core";

import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { NavigationHorizontalCdkResolverVisitor } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.resolver.visitor";
import { NavigationHorizontalCdkDisplayHandlerVisitor, NavigationHorizontalCdkDropdownDisplayHandler } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.display.handler";

class HorizontalNavigationResolverMenuVisitor extends NavigationHorizontalCdkResolverVisitor {
    // public override visitNested(): void {
    // let componentRef: ComponentRef<NavigationHorizontalCdkDropdown> = renderer.vcr.createComponent(NavigationHorizontalCdkDropdown, {
    //     injector: renderer.vcr.injector
    // });

    // componentRef.instance.menuClass = "mt-2.5";

    // this.renderComponent(componentRef, renderer.item);
    // }
}

@Injectable()
export class ExampleResponsiveNavigationHorizontalMenuCdkService extends NavigationHorizontalCdkService {
    public override handle(vcr: ViewContainerRef, handler: NavigationHorizontalCdkDropdownDisplayHandler): void {
        handler.accept(new NavigationHorizontalCdkDisplayHandlerVisitor(vcr));
    }
}
