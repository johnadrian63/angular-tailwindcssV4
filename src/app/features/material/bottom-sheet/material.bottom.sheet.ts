import { Component, inject, OnInit } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatBottomSheetModule, MatBottomSheet } from "@angular/material/bottom-sheet";


import { MaterialBottomSheetPanel } from "./panel/material.bottom.sheet.panel";
import { MaterialBottomSheetNavigationVerticalService } from "./material.bottom.sheet.vertical.menu.service";
import { navigationDataMock } from "../../shared/navigation/navigation.data.mock";
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
        this.verticalMenuService.data.set(navigationDataMock);
    }

    public open(): void {
        this.bottomSheet.open(MaterialBottomSheetPanel);
    }
}
