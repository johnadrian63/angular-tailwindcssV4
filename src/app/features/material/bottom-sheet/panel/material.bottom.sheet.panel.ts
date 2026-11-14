import { Component, inject, OnInit } from "@angular/core";

import { navigationData } from "../../../shared/navigation/navigation.data";
import { NavigationVertical } from "../../../shared/navigation/vertical/navigation.vertical";
import { MaterialBottomSheetNavigationVerticalService } from "../material.bottom.sheet.vertical.menu.service";
import { NavigationVerticalService } from "../../../shared/navigation/vertical/navigation.vertical.service";

@Component({
    imports: [NavigationVertical],
    selector: "app-material-bottom-sheet-panel",
    styleUrl: "./material.bottom.sheet.panel.css",
    templateUrl: "./material.bottom.sheet.panel.html",
    providers: [
        MaterialBottomSheetNavigationVerticalService,
        {
            provide: NavigationVerticalService,
            useExisting: MaterialBottomSheetNavigationVerticalService,
        }
    ],
})
export class MaterialBottomSheetPanel implements OnInit {
    private readonly verticalMenuService = inject<MaterialBottomSheetNavigationVerticalService>(MaterialBottomSheetNavigationVerticalService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(navigationData);
    }
}
