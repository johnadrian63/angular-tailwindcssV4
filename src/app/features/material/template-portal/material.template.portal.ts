import { Component, effect, viewChild, ViewContainerRef } from "@angular/core";
import { MaterialTemplatePortalExampleTemplate1 } from "./example-template1/material.template.portal.example.template1";
import { MaterialTemplatePortalExampleTemplate2 } from "./example-template2/material.template.portal.example.template2";

@Component({
    selector: "app-material-template-portal",
    styleUrl: "./material.template.portal.css",
    templateUrl: "./material.template.portal.html",
})
export class MaterialTemplatePortal {
    public template = viewChild("template", { read: ViewContainerRef });

    public showTemplate1(): void {
        const template = this.template();

        template?.clear();
        template?.createComponent(MaterialTemplatePortalExampleTemplate1);
    }

    public showTemplate2(): void {
        const template = this.template();

        template?.clear();
        template?.createComponent(MaterialTemplatePortalExampleTemplate2);
    }
}
