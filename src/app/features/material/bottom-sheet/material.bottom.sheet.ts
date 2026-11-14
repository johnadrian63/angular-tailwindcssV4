import { Component, inject, OnInit } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatBottomSheetModule, MatBottomSheet } from "@angular/material/bottom-sheet";


import { MaterialBottomSheetPanel } from "./panel/material.bottom.sheet.panel";
import { MaterialBottomSheetNavigationVerticalService } from "./material.bottom.sheet.vertical.menu.service";
import { navigationData } from "../../shared/navigation/navigation.data";
import { NavigationVertical } from "../../shared/navigation/vertical/navigation.vertical";
import { NavigationVerticalService } from "../../shared/navigation/vertical/navigation.vertical.service";

@Component({
    selector: "app-material-bottom-sheet",
    styleUrl: "./material.bottom.sheet.css",
    templateUrl: "./material.bottom.sheet.html",
    providers: [
        MaterialBottomSheetNavigationVerticalService,
        {
            provide: NavigationVerticalService,
            useExisting: MaterialBottomSheetNavigationVerticalService,
        }
    ],
    imports: [
        MatBottomSheetModule,
        MatButtonModule,
        MatListModule,
        NavigationVertical
    ],
})
export class MaterialBottomSheet implements OnInit {
    private readonly bottomSheet = inject<MatBottomSheet>(MatBottomSheet);
    private readonly verticalMenuService = inject<MaterialBottomSheetNavigationVerticalService>(MaterialBottomSheetNavigationVerticalService);

    public ngOnInit(): void {
        this.verticalMenuService.menus.set(navigationData);
    }

    public open(): void {
        this.bottomSheet.open(MaterialBottomSheetPanel);
    }
}
