import { Component } from '@angular/core';
import { CdkMenuItem, CdkMenuTrigger, CdkMenu } from '@angular/cdk/menu';

@Component({
    selector: "app-material-cdk-menu-custom1",
    styleUrl: "./material.cdk.menu.custom1.css",
    templateUrl: "./material.cdk.menu.custom1.html",
    // imports: [CdkMenuTrigger, CdkMenu, CdkMenuItem],
    hostDirectives: [
        CdkMenuItem
    ]
})
export class MaterialCdkMenuCustom1 { }
