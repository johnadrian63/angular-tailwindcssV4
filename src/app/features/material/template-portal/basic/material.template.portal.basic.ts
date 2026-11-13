import { Component, effect, viewChild, ViewContainerRef } from "@angular/core";
import { MaterialTemplatePortalBasicExampleTemplate1 } from "./example-template1/material.template.portal.basic.example.template1";
import { MaterialTemplatePortalBasicExampleTemplate2 } from "./example-template2/material.template.portal.basic.example.template2";

@Component({
    selector: "app-material-template-portal-basic",
    styleUrl: "./material.template.portal.basic.css",
    templateUrl: "./material.template.portal.basic.html",
})
export class MaterialTemplatePortalBasic {
    public template = viewChild("template", { read: ViewContainerRef });

    public showTemplate1(): void {
        const template = this.template();

        template?.clear();
        template?.createComponent(MaterialTemplatePortalBasicExampleTemplate1);
    }

    public showTemplate2(): void {
        const template = this.template();

        template?.clear();
        template?.createComponent(MaterialTemplatePortalBasicExampleTemplate2);
    }
}
