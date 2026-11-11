import { Component } from '@angular/core';
import { CdkMenuItem, CdkMenuTrigger, CdkMenu} from '@angular/cdk/menu';

@Component({
    selector: "app-material-cdk-menu-custom2",
    styleUrl: "./material.cdk.menu.custom2.css",
    templateUrl: "./material.cdk.menu.custom2.html",
    // imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem],
    hostDirectives: [
        CdkMenuItem
    ]
})
export class MaterialCdkMenuCustom2 { }
