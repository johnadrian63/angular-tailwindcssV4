import { Component, inject, OnInit } from "@angular/core";

import { navigationDataMock } from "../../shared/navigation/navigation.data.mock";
import { MaterialCdkMenuDynamicHorizontalService } from "./material.cdk.menu.dynamic.horizontal.service";
import { NavigationHorizontalCdk } from "../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk";
import { NavigationHorizontalCdkService } from "../../shared/navigation/horizontal/cdk/navigation.horizontal.cdk.service";

@Component({
    selector: "app-material-cdk-menu-dynamic",
    styleUrl: "./material.cdk.menu.dynamic.css",
    templateUrl: "./material.cdk.menu.dynamic.html",
    imports: [NavigationHorizontalCdk],
    providers: [
        MaterialCdkMenuDynamicHorizontalService,
        {
            provide: NavigationHorizontalCdkService,
            useExisting: MaterialCdkMenuDynamicHorizontalService,
        }
    ]
})
export class MaterialCdkMenuDynamic implements OnInit {
    private readonly cdkMenuDynamicHorizontalService: MaterialCdkMenuDynamicHorizontalService = inject<MaterialCdkMenuDynamicHorizontalService>(MaterialCdkMenuDynamicHorizontalService);

    public ngOnInit(): void {
        this.cdkMenuDynamicHorizontalService.data.set(navigationDataMock);
    }
}
