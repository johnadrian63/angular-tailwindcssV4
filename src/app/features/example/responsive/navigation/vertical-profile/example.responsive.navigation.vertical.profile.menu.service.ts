import { Injectable } from "@angular/core";

import { IMenuItem } from "../../../../shared/navigation/navigation.model";
import { NavigationVerticalService } from "../../../../shared/navigation/vertical/navigation.vertical.service";

@Injectable()
export class ExampleResponsiveNavigationVerticalProfileMenuService extends NavigationVerticalService {
    public initializeData(menus: IMenuItem[]): void {
        this.menus.set(menus[0].children!);
    }
}
