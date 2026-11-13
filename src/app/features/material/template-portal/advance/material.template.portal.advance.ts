import { Component, viewChild, ViewContainerRef } from "@angular/core";

import { MaterialTemplatePortalAdvanceExampleTemplate1 } from "./example-template1/material.template.portal.advance.example.template1";
import { MaterialTemplatePortalAdvanceResolver } from "./resolver/material.template.portal.advance.resolver";
import { MaterialTemplatePortalAdvanceMainResolverService } from "./material.template.portal.advance.main.resolver.service";
import { MaterialTemplatePortalAdvanceResolverService } from "./resolver/material.template.portal.advance.resolver.service";

@Component({
    selector: "app-material-template-portal-advance",
    styleUrl: "./material.template.portal.advance.css",
    templateUrl: "./material.template.portal.advance.html",
    imports: [MaterialTemplatePortalAdvanceResolver],
    providers: [
        MaterialTemplatePortalAdvanceMainResolverService,
        {
            provide: MaterialTemplatePortalAdvanceResolverService,
            useExisting: MaterialTemplatePortalAdvanceMainResolverService
        }
    ],
})
export class MaterialTemplatePortalAdvance {
    public template = viewChild("template", { read: ViewContainerRef });

    public showTemplate1(): void {
        const template = this.template();

        template?.clear();
        template?.createComponent(MaterialTemplatePortalAdvanceExampleTemplate1);
    }
}
