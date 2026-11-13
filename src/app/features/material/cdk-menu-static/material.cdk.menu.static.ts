import { Component } from "@angular/core";
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from "@angular/cdk/menu";

import { MaterialCdkMenuCustom1 } from "./custom1/material.cdk.menu.custom1";
import { MaterialCdkMenuCustom2 } from "./custom2/material.cdk.menu.custom2";
import { MaterialCdkMenuCustom3 } from "./custom3/material.cdk.menu.custom3";

@Component({
    selector: "app-material-cdk-menu-static",
    styleUrl: "./material.cdk.menu.static.css",
    templateUrl: "./material.cdk.menu.static.html",
    imports: [
        CdkMenuTrigger,
        CdkMenu,
        CdkMenuItem,
        MaterialCdkMenuCustom1,
        MaterialCdkMenuCustom2,
        MaterialCdkMenuCustom3
    ],
})
export class MaterialCdkMenuStatic { }
