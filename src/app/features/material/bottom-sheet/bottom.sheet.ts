import { Component, inject } from "@angular/core";
import { MatBottomSheetModule, MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import { BottomSheetPanel } from "./panel/bottom.sheet.panel";
import { getRange } from "../../shared/util/range.generator";
import { VerticalMenu } from "../../shared/vertical-menu/vertical.menu";

@Component({
    selector: "app-bottom.sheet",
    styleUrl: "./bottom.sheet.css",
    templateUrl: "./bottom.sheet.html",
    imports: [MatBottomSheetModule, MatButtonModule, MatListModule, VerticalMenu],
})
export class BottomSheet {
    private readonly bottomSheet = inject<MatBottomSheet>(MatBottomSheet);

    public open(): void {
        this.bottomSheet.open(BottomSheetPanel);
    }

    public getRange(range: number): number[] {
        return getRange(range);
    }
}
