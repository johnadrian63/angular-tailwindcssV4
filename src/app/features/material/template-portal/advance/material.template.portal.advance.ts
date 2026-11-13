import { Component, effect, viewChild, ViewContainerRef } from "@angular/core";

import { MaterialTemplatePortalAdvanceExampleTemplate1 } from "./example-template1/material.template.portal.advance.example.template1";

@Component({
    selector: "app-material-template-portal-advance",
    styleUrl: "./material.template.portal.advance.css",
    templateUrl: "./material.template.portal.advance.html",
})
export class MaterialTemplatePortalAdvance {
    public template = viewChild("template", { read: ViewContainerRef });

    public showTemplate1(): void {
        const template = this.template();

        template?.clear();
        template?.createComponent(MaterialTemplatePortalAdvanceExampleTemplate1);
    }

}
