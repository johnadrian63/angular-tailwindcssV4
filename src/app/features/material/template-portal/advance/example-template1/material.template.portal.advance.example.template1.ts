import { Component, TemplateRef, viewChild, ViewContainerRef } from "@angular/core";
import { NgComponentOutlet, NgTemplateOutlet } from "@angular/common";
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from "@angular/cdk/menu";

import { MaterialTemplatePortalAdvanceResolver } from "../resolver/material.template.portal.advance.resolver";
import { MaterialTemplatePortalAdvanceResolverService } from "../resolver/material.template.portal.advance.resolver.service";
import { MaterialTemplatePortalAdvanceExampleTemplateResolverService } from "./material.template.portal.advance.example.template.resolver.service";

@Component({
    selector: "app-material-template-portal-advance-example-template1",
    styleUrl: "./material.template.portal.advance.example.template1.css",
    templateUrl: "./material.template.portal.advance.example.template1.html",
    imports: [
        MaterialTemplatePortalAdvanceResolver,
        CdkMenuTrigger,
        CdkMenu,
    ],
    providers: [
        MaterialTemplatePortalAdvanceExampleTemplateResolverService,
        {
            provide: MaterialTemplatePortalAdvanceResolverService,
            useExisting: MaterialTemplatePortalAdvanceExampleTemplateResolverService
        }
    ],
})
export class MaterialTemplatePortalAdvanceExampleTemplate1 {
    private readonly container = viewChild("container", {
        read: ViewContainerRef
    });
    private readonly template = viewChild.required<TemplateRef<any>>("template");
    private readonly tmpl1 = viewChild<CdkMenu>("template1");

    public showTemplate(): void {
        this.container()?.createEmbeddedView(this.template());
    }
}
