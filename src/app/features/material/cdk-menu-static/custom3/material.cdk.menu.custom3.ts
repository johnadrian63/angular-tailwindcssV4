import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

import { CdkMenuItem, CdkMenuTrigger, CdkMenu } from "@angular/cdk/menu";

@Component({
    selector: "app-material-cdk-menu-custom3",
    styleUrl: "./material.cdk.menu.custom3.css",
    templateUrl: "./material.cdk.menu.custom3.html",
    // imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem],
    imports: [RouterLink],
    hostDirectives: [
        CdkMenuItem
    ]
})
export class MaterialCdkMenuCustom3 { }
