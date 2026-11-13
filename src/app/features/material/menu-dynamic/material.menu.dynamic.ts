import { Component, inject, OnInit, signal, WritableSignal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";

import { IMenuItem } from "../../shared/navigation/navigation.model";
import { navigationDataMock } from "../../shared/navigation/navigation.data.mock";
import { NavigationHorizontalMenu } from "../../shared/navigation/horizontal/menu/navigation.horizontal.menu";
import { NavigationHorizontalMenuService } from "../../shared/navigation/horizontal/menu/navigation.horizontal.menu.service";
import { MaterialMenuDynamicNavigationHorizontalService } from "./material.menu.dynamic.navigation.horizontal.service";

@Component({
    selector: "app-material-menu-dynamic",
    styleUrl: "./material.menu.dynamic.css",
    templateUrl: "./material.menu.dynamic.html",
    imports: [
        MatButtonModule,
        MatMenuModule,
        NavigationHorizontalMenu
    ],
    providers: [
        MaterialMenuDynamicNavigationHorizontalService,
        {
            provide: NavigationHorizontalMenuService,
            useExisting: MaterialMenuDynamicNavigationHorizontalService
        }
    ],
})
export class MaterialMenuDynamic implements OnInit {
    public readonly menuList: WritableSignal<IMenuItem[]> = signal<IMenuItem[]>(navigationDataMock);

    private readonly navigationHorizontalMenuService: MaterialMenuDynamicNavigationHorizontalService = inject<MaterialMenuDynamicNavigationHorizontalService>(MaterialMenuDynamicNavigationHorizontalService);

    public ngOnInit(): void {
        this.navigationHorizontalMenuService.data.set(navigationDataMock);
    }
}
