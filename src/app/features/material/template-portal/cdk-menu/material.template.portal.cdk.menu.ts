import { Component } from "@angular/core";
import { CdkMenuTrigger } from "@angular/cdk/menu";

import { MaterialTemplatePortalCdkMenuResolver } from "./resolver/material.template.portal.cdk.menu.resolver";
import { MaterialTemplatePortalCdkMenuMainResolverService } from "./material.template.portal.cdk.menu.main.resolver.service";
import { MaterialTemplatePortalCdkMenuResolverService } from "./resolver/material.template.portal.cdk.menu.resolver.service";
import { MaterialTemplatePortalCdkMenuDropdown } from "./dropdown/material.template.portal.cdk.menu.dropdown";

@Component({
    selector: "app-material-template-portal-cdk-menu",
    styleUrl: "./material.template.portal.cdk.menu.css",
    templateUrl: "./material.template.portal.cdk.menu.html",
    imports: [
        MaterialTemplatePortalCdkMenuResolver,
        MaterialTemplatePortalCdkMenuDropdown,
        CdkMenuTrigger
    ],
    providers: [
        MaterialTemplatePortalCdkMenuMainResolverService,
        {
            provide: MaterialTemplatePortalCdkMenuResolverService,
            useExisting: MaterialTemplatePortalCdkMenuMainResolverService,
        }
    ],
})
export class MaterialTemplatePortalCdkMenu { }
