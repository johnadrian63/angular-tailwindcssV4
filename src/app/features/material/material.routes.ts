import { Routes } from "@angular/router";

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
                path: "bottom-sheet",
                loadComponent: () => import("./bottom-sheet/bottom.sheet").then((c) => c.BottomSheet),
            },
        ]
    }
];