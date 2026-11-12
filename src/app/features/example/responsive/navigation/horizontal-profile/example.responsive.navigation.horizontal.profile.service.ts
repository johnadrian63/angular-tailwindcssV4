import { Injectable, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../../shared/navigation/navigation.model";
import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { ExampleResponsiveNavigationHorizontalProfileDropdown } from "./dropdown/example.responsive.navigation.horizontal.profile.dropdown";

@Injectable()
export class ExampleResponsiveNavigationHorizontalProfileCdkService extends NavigationHorizontalCdkService {
    public override handleNested(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(ExampleResponsiveNavigationHorizontalProfileDropdown);

        componentRef.instance.menuClass = "mt-2.5";

        this.renderComponent(componentRef, data);
    }
}
