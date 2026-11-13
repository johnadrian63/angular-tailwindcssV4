import { Component, inject, OnInit } from "@angular/core";

import { MaterialTemplatePortalCdkMenuResolverService } from "./material.template.portal.cdk.menu.resolver.service";

@Component({
    imports: [],
    selector: "app-material-template-portal-cdk-menu-resolver",
    styleUrl: "./material.template.portal.cdk.menu.resolver.css",
    templateUrl: "./material.template.portal.cdk.menu.resolver.html",
})
export class MaterialTemplatePortalCdkMenuResolver implements OnInit {
    private readonly resolverService: MaterialTemplatePortalCdkMenuResolverService = inject<MaterialTemplatePortalCdkMenuResolverService>(MaterialTemplatePortalCdkMenuResolverService);


    public ngOnInit(): void {
        console.log("app resolver", this.resolverService);
    }
}
