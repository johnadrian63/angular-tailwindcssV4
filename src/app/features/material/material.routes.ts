import { Routes } from "@angular/router";
import { materialTemplatePortalRoutes } from "./template-portal/material.template.portal.routes";

export const materialRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./material").then((c) => c.Material),
        children: [
            {
                path: "",
                redirectTo: "menu-static",
                pathMatch: "full"
            },
            {
                path: "menu-static",
                loadComponent: () => import("./menu-static/material.menu.static").then((c) => c.MaterialMenuStatic),
            },
            {
                path: "menu-dynamic",
                loadComponent: () => import("./menu-dynamic/material.menu.dynamic").then((c) => c.MaterialMenuDynamic),
            },
            {
                path: "cdk-menu-static",
                loadComponent: () => import("./cdk-menu-static/material.cdk.menu.static").then((c) => c.MaterialCdkMenuStatic),
            },
            {
                path: "cdk-menu-dynamic",
                loadComponent: () => import("./cdk-menu-dynamic/material.cdk.menu.dynamic").then((c) => c.MaterialCdkMenuDynamic),
            },
            {
                path: "bottom-sheet",
                loadComponent: () => import("./bottom-sheet/material.bottom.sheet").then((c) => c.MaterialBottomSheet),
            },
            {
                path: "template-portal",
                loadComponent: () => import("./template-portal/material.template.portal").then((c) => c.MaterialTemplatePortal),
                children: [
                    ...materialTemplatePortalRoutes
                ]
            },
        ]
    }
];
