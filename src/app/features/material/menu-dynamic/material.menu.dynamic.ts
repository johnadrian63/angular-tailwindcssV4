import { Component, inject, OnInit, signal, WritableSignal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

import { IMenuItem } from "../../shared/navigation/navigation.model";
import { navigationDataMock } from "../../shared/navigation/navigation.data.mock";
import { NavigationHorizontal } from "../../shared/navigation/horizontal/navigation.horizontal";
import { NavigationHorizontalService } from "../../shared/navigation/horizontal/navigation.horizontal.service";
import { MaterialMenuDynamicNavigationHorizontalService } from "./material.menu.dynamic.navigation.horizontal.service";

@Component({
    selector: "app-material-menu-dynamic",
    styleUrl: "./material.menu.dynamic.css",
    templateUrl: "./material.menu.dynamic.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationHorizontal
    ],
    providers: [
        MaterialMenuDynamicNavigationHorizontalService,
        {
            provide: NavigationHorizontalService,
            useExisting: MaterialMenuDynamicNavigationHorizontalService
        }
    ],
})
export class MaterialMenuDynamic implements OnInit {
    public readonly menuList: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>(navigationDataMock);

    private readonly navigationHorizontalService: MaterialMenuDynamicNavigationHorizontalService = inject<MaterialMenuDynamicNavigationHorizontalService>(MaterialMenuDynamicNavigationHorizontalService);

    public ngOnInit(): void {
        this.navigationHorizontalService.data.set(navigationDataMock);
    }
}
