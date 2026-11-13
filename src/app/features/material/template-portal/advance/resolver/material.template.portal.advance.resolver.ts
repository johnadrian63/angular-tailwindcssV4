import { Component, inject, OnInit } from "@angular/core";

import { MaterialTemplatePortalAdvanceResolverService } from "./material.template.portal.advance.resolver.service";

@Component({
    selector: "app-material-template-portal-advance-resolver",
    template: "app-material-template-portal-advance-resolver",
    imports: [],
})
export class MaterialTemplatePortalAdvanceResolver implements OnInit {
    private readonly resolverService: MaterialTemplatePortalAdvanceResolverService = inject<MaterialTemplatePortalAdvanceResolverService>(MaterialTemplatePortalAdvanceResolverService);

    public ngOnInit(): void {
        console.log(this.resolverService);
    }
}
