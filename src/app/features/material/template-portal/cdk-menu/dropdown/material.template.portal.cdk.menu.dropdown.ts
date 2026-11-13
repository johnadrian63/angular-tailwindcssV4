import { CdkMenu } from "@angular/cdk/menu";
import { Component, viewChild } from "@angular/core";

import { MaterialTemplatePortalCdkMenuResolver } from "../resolver/material.template.portal.cdk.menu.resolver";
import { MaterialTemplatePortalCdkMenuResolverService } from "../resolver/material.template.portal.cdk.menu.resolver.service";
import { MaterialTemplatePortalCdkMenuDropdownResolverService } from "./material.template.portal.cdk.menu.dropdown.resolver.service";

@Component({
    selector: "app-material-template-portal-cdk-menu-dropdown",
    styleUrl: "./material.template.portal.cdk.menu.dropdown.css",
    templateUrl: "./material.template.portal.cdk.menu.dropdown.html",
    imports: [CdkMenu, MaterialTemplatePortalCdkMenuResolver],
    providers: [
        MaterialTemplatePortalCdkMenuDropdownResolverService,
        {
            provide: MaterialTemplatePortalCdkMenuResolverService,
            useExisting: MaterialTemplatePortalCdkMenuDropdownResolverService,
        }
    ],
})
export class MaterialTemplatePortalCdkMenuDropdown {
    public menuItems = viewChild<CdkMenu>("menuItems");
}
