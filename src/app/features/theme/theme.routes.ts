import { Routes } from "@angular/router";

export const themeRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./theme").then((c) => c.Theme),
        children: [
            {
                path: "",
                redirectTo: "basic",
                pathMatch: "full"
            },
            {
                path: "basic",
                loadComponent: () => import("./basic/basic").then((c) => c.Basic)
            },
            {
                path: "branding",
                loadComponent: () => import("./branding/branding").then((c) => c.Branding)
            }
        ]
    }
];