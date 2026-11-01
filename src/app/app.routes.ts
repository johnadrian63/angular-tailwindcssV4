import { Routes } from '@angular/router';

import { buttonRoutes } from "./features/button/button.routes";
import { flexRoutes } from "./features/flex/flex.routes";
import { themeRoutes } from "./features/theme/theme.routes";
import { gridRoutes } from "./features/grid/grid.routes";
import { exampleRoutes } from "./features/example/example.routes";

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import("./layout/default/layout.default").then((c) => c.LayoutDefault),
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "/flex"
            },
            {
                path: "flex",
                children: [
                    ...flexRoutes
                ]
            },
            {
                path: "grid",
                children: [
                    ...gridRoutes
                ]
            },
            {
                path: "theme",
                children: [
                    ...themeRoutes
                ]
            },
            {
                path: "button",
                children: [
                    ...buttonRoutes
                ]
            },
        ]
    },
    {
        path: "",
        loadComponent: () => import("./layout/blank/layout.blank").then((c) => c.LayoutBlank),
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "/example",
            },
            {
                path: "example",
                children: [
                    ...exampleRoutes
                ]
            }
        ]
        
    }
];
