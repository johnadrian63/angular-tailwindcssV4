import { CdkMenu } from "@angular/cdk/menu";
import { NgTemplateOutlet } from "@angular/common";
import { PortalModule, TemplatePortal } from "@angular/cdk/portal";
import { Component, inject, Injector, OnInit, TemplateRef, viewChild, ViewContainerRef } from "@angular/core";

import { MaterialTemplatePortalCdkMenuResolver } from "../resolver/material.template.portal.cdk.menu.resolver";
import { MaterialTemplatePortalCdkMenuResolverService } from "../resolver/material.template.portal.cdk.menu.resolver.service";
import { MaterialTemplatePortalCdkMenuDropdownResolverService } from "./material.template.portal.cdk.menu.dropdown.resolver.service";

@Component({
    selector: "app-material-template-portal-cdk-menu-dropdown",
    styleUrl: "./material.template.portal.cdk.menu.dropdown.css",
    templateUrl: "./material.template.portal.cdk.menu.dropdown.html",
    imports: [
        CdkMenu,
        MaterialTemplatePortalCdkMenuResolver,
        NgTemplateOutlet,
        PortalModule,
    ],
    providers: [
        MaterialTemplatePortalCdkMenuDropdownResolverService,
        {
            provide: MaterialTemplatePortalCdkMenuResolverService,
            useExisting: MaterialTemplatePortalCdkMenuDropdownResolverService,
        }
    ],
})
export class MaterialTemplatePortalCdkMenuDropdown implements OnInit {
    private readonly viewContainerRef = inject(ViewContainerRef);

    public readonly menuItems1 = viewChild<TemplateRef<CdkMenu>>("menuItems1");
    public readonly menuItems2 = viewChild<TemplateRef<CdkMenu>>("menuItems2");
    public readonly menuItems3 = viewChild<TemplateRef<CdkMenu>>("menuItems3");

    public readonly templatePortalContent = viewChild.required<TemplateRef<unknown>>("templatePortalContent");

    public templatePortal!: TemplatePortal<unknown>;

    public readonly injector = inject<Injector>(Injector);

    public ngOnInit(): void {
        this.templatePortal = new TemplatePortal(
            this.templatePortalContent(),
            this.viewContainerRef,
            {},
            this.injector
        );
    }
}
