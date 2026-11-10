import { Component, inject, OnInit } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule, MatBottomSheet } from '@angular/material/bottom-sheet';


import { MaterialBottomSheetPanel } from "./panel/material.bottom.sheet.panel";
import { MaterialBottomSheetVerticalMenuService } from "./material.bottom.sheet.vertical.menu.service";
import { NavigationVerticalMenu } from "../../shared/navigation-menu/vertical/navigation.menu.vertical";
import { NavigationVerticalMenuService } from "../../shared/navigation-menu/vertical/navigation.menu.vertical.service";
import { navigationMenuDataMock } from "../../shared/navigation-menu/vertical/navigation.menu.vertical.data.mock";

@Component({
    selector: "app-material-bottom-sheet",
    styleUrl: "./material.bottom.sheet.css",
    templateUrl: "./material.bottom.sheet.html",
    providers: [
        MaterialBottomSheetVerticalMenuService,
        {
            provide: NavigationVerticalMenuService,
            useExisting: MaterialBottomSheetVerticalMenuService,
        }
    ],
    imports: [
        MatBottomSheetModule,
        MatButtonModule,
        MatListModule,
        NavigationVerticalMenu
    ],
})
export class MaterialBottomSheet implements OnInit {
    private readonly bottomSheet = inject<MatBottomSheet>(MatBottomSheet);
    private readonly verticalMenuService = inject<MaterialBottomSheetVerticalMenuService>(MaterialBottomSheetVerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(navigationMenuDataMock);
    }

    public open(): void {
        this.bottomSheet.open(MaterialBottomSheetPanel);
    }
}
