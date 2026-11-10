import { Component, inject } from "@angular/core";
import { MatBottomSheetModule, MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { MaterialBottomSheetPanel } from "./panel/material.bottom.sheet.panel";
import { getRange } from "../../shared/util/range.generator";
import { VerticalMenu } from "../../shared/vertical-menu/vertical.menu";

@Component({
    selector: "app-material-bottom-sheet",
    styleUrl: "./material.bottom.sheet.css",
    templateUrl: "./material.bottom.sheet.html",
    imports: [MatBottomSheetModule, MatButtonModule, MatListModule, VerticalMenu],
})
export class MaterialBottomSheet {
    private readonly bottomSheet = inject<MatBottomSheet>(MatBottomSheet);

    public open(): void {
        this.bottomSheet.open(MaterialBottomSheetPanel);
    }

    public getRange(range: number): number[] {
        return getRange(range);
    }
}
