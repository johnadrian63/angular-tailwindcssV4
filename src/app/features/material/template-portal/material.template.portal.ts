import { Component, effect, viewChild, ViewContainerRef } from "@angular/core";


@Component({
    selector: "app-material-template-portal",
    styleUrl: "./material.template.portal.css",
    templateUrl: "./material.template.portal.html",
})
export class MaterialTemplatePortal {
    public tmpl = viewChild("tmpl", { read: ViewContainerRef });


    constructor() {
        effect(() => {
            // this.tmpl()?.createComponent(AppTest);
        });
    }
}
