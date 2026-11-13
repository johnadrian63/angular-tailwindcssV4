import { Routes } from '@angular/router';

import { buttonRoutes } from "./features/button/button.routes";
import { flexRoutes } from "./features/flex/flex.routes";
import { themeRoutes } from "./features/theme/theme.routes";
import { gridRoutes } from "./features/grid/grid.routes";
import { exampleRoutes } from "./features/example/example.routes";
import { materialRoutes } from "./features/material/material.routes";
import { designPatternRoutes } from "./features/design-patterns/design.patterns.routes";
import { ngRoutes } from "./features/ng/ng.routes";

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
            {
                path: "material",
                children: [
                    ...materialRoutes
                ]
            },
            {
                path: "ng",
                children: [
                    ...ngRoutes
                ]
            },
            {
                path: "design-patterns",
                children: [
                    ...designPatternRoutes
                ]
            },
            {
                path: "not-found",
                loadComponent: () => import("./features/error/404/error.404").then((c) => c.Error404)
            }
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

    },
    {
        path: "**",
        redirectTo: "not-found"
    }
];
