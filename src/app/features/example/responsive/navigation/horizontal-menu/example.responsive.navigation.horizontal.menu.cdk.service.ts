import { Injectable, ViewContainerRef } from "@angular/core";

import { NavigationDisplayHandler } from "../../../../shared/navigation/navigation.display.handler";
import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { ExampleResponsiveNavigationHorizontalMenuDisplayHandlerVisitor } from "./example.responsive.navigation.horizontal.menu.display.handler";

@Injectable()
export class ExampleResponsiveNavigationHorizontalMenuCdkService extends NavigationHorizontalCdkService {
    public override handle(vcr: ViewContainerRef, handler: NavigationDisplayHandler): void {
        handler.accept(new ExampleResponsiveNavigationHorizontalMenuDisplayHandlerVisitor(vcr));
    }
}
