import { Routes } from "@angular/router";

export const materialTemplatePortalRoutes: Routes = [
    {
        path: "",
        redirectTo: "basic",
        pathMatch: "full",
    },
    {
        path: "basic",
        loadComponent: () => import("./basic/material.template.portal.basic").then((c) => c.MaterialTemplatePortalBasic),
    },
    {
        path: "advance",
        loadComponent: () => import("./advance/material.template.portal.advance").then((c) => c.MaterialTemplatePortalAdvance),
    },
    {
        path: "cdk-menu",
        loadComponent: () => import("./cdk-menu/material.template.portal.cdk.menu").then((c) => c.MaterialTemplatePortalCdkMenu),
    }
];