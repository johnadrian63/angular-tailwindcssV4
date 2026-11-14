import { Injectable, ViewContainerRef } from "@angular/core";

import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { ExampleResponsiveNavigationHorizontalProfileDisplayHandler, ExampleResponsiveNavigationHorizontalProfileDisplayHandlerVisitor } from "./example.responsive.navigation.horizontal.profile.display.handler";

@Injectable()
export class ExampleResponsiveNavigationHorizontalProfileCdkService extends NavigationHorizontalCdkService {
    public override handle(vcr: ViewContainerRef, handler: ExampleResponsiveNavigationHorizontalProfileDisplayHandler): void {
        handler.accept(new ExampleResponsiveNavigationHorizontalProfileDisplayHandlerVisitor(vcr));
    }
}
