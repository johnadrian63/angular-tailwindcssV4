import { Injectable, ViewContainerRef } from "@angular/core";

import { IMenuItem } from "../../../../shared/navigation/navigation.model";
import { NavigationHorizontalCdkService } from "../../../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";
import { NavigationHorizontalCdkDropdown } from "../../../../shared/navigation/horizontal/cdk/dropdown/navigation.horizontal.cdk.dropdown";

@Injectable()
export class ExampleResponsiveNavigationHorizontalProfileCdkService extends NavigationHorizontalCdkService {

    public override handleNested(vcr: ViewContainerRef, data: IMenuItem): void {
        const componentRef = vcr.createComponent(NavigationHorizontalCdkDropdown);

        componentRef.instance.menuClass = "mt-2.5";

        this.renderComponent(componentRef, data);
    }
}
