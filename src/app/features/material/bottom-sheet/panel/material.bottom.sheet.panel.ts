import { Component, inject, OnInit } from "@angular/core";
import { VerticalMenu } from "../../../shared/vertical-menu/vertical.menu";
import { VerticalMenuService } from "../../../shared/vertical-menu/vertical.menu.service";
import { MaterialBottomSheetPanelVerticalMenuService } from "./material.bottom.sheet.panel.vertical.menu.service";
import { verticalMenuDataMock } from "../../../shared/vertical-menu/vertical.menu.data.mock";
import { MaterialBottomSheetVerticalMenuService } from "../material.bottom.sheet.vertical.menu.service";

@Component({
    imports: [VerticalMenu],
    selector: "app-material-bottom-sheet-panel",
    styleUrl: "./material.bottom.sheet.panel.css",
    templateUrl: "./material.bottom.sheet.panel.html",
    providers: [
        MaterialBottomSheetVerticalMenuService,
        {
            provide: VerticalMenuService,
            useExisting: MaterialBottomSheetVerticalMenuService,
        }
    ],
})
export class MaterialBottomSheetPanel implements OnInit {
    private readonly verticalMenuService = inject<MaterialBottomSheetVerticalMenuService>(MaterialBottomSheetVerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(verticalMenuDataMock);
    }
}
