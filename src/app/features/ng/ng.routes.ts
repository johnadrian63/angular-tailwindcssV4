import { Routes } from "@angular/router";

export const ngRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./ng").then((c) => c.Ng),
        children: [
            {
                path: "",
                redirectTo: "vcr",
                pathMatch: "full"
            },
            {
                path: "vcr",
                loadComponent: () => import("./vcr/ng.vcr").then((c) => c.NgVcr),
            }
        ]
    }
];