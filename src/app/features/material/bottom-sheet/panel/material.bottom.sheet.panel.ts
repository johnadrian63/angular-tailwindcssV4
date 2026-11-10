import { Component, inject, OnInit } from "@angular/core";

import { MaterialBottomSheetVerticalMenuService } from "../material.bottom.sheet.vertical.menu.service";
import { NavigationVerticalMenu } from "../../../shared/navigation-menu/vertical/navigation.menu.vertical";
import { navigationMenuDataMock } from "../../../shared/navigation-menu/vertical/navigation.menu.vertical.data.mock";
import { NavigationVerticalMenuService } from "../../../shared/navigation-menu/vertical/navigation.menu.vertical.service";

@Component({
    imports: [NavigationVerticalMenu],
    selector: "app-material-bottom-sheet-panel",
    styleUrl: "./material.bottom.sheet.panel.css",
    templateUrl: "./material.bottom.sheet.panel.html",
    providers: [
        MaterialBottomSheetVerticalMenuService,
        {
            provide: NavigationVerticalMenuService,
            useExisting: MaterialBottomSheetVerticalMenuService,
        }
    ],
})
export class MaterialBottomSheetPanel implements OnInit {
    private readonly verticalMenuService = inject<MaterialBottomSheetVerticalMenuService>(MaterialBottomSheetVerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(navigationMenuDataMock);
    }
}
