import { Routes } from "@angular/router";

export const gridRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./grid").then((c) => c.Grid),
        children: [
            {
                path: "",
                redirectTo: "basic",
                pathMatch: "full"
            },
            {
                path: "basic",
                loadComponent: () => import("./basic/grid.basic").then((c) => c.GridBasic),
            },
            {
                path: "grid-column",
                loadComponent: () => import("./grid-column/grid.column").then((c) => c.GridColumn),
            }
        ]
    }
];
