import { Component, inject, OnInit } from "@angular/core";
import { MatBottomSheetModule, MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { getRange } from "../../shared/util/range.generator";
import { VerticalMenu } from "../../shared/vertical-menu/vertical.menu";
import { MaterialBottomSheetPanel } from "./panel/material.bottom.sheet.panel";
import { VerticalMenuService } from "../../shared/vertical-menu/vertical.menu.service";
import { MaterialBottomSheetVerticalMenuService } from "./material.bottom.sheet.vertical.menu.service";
import { verticalMenuDataMock } from "../../shared/vertical-menu/vertical.menu.data.mock";

@Component({
    selector: "app-material-bottom-sheet",
    styleUrl: "./material.bottom.sheet.css",
    templateUrl: "./material.bottom.sheet.html",
    providers: [
        MaterialBottomSheetVerticalMenuService,
        {
            provide: VerticalMenuService,
            useExisting: MaterialBottomSheetVerticalMenuService,
        }
    ],
    imports: [
        MatBottomSheetModule,
        MatButtonModule,
        MatListModule,
        VerticalMenu
    ],
})
export class MaterialBottomSheet implements OnInit {
    private readonly bottomSheet = inject<MatBottomSheet>(MatBottomSheet);
    private readonly verticalMenuService = inject<MaterialBottomSheetVerticalMenuService>(MaterialBottomSheetVerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(verticalMenuDataMock);
    }

    public open(): void {
        this.bottomSheet.open(MaterialBottomSheetPanel);
    }

    public getRange(range: number): number[] {
        return getRange(range);
    }
}
