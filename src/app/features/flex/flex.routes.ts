import { Routes } from "@angular/router";

export const flexRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./flex").then((c) => c.Flex),
        children: [
            {
                path: "",
                redirectTo: "basic",
                pathMatch: "full"
            },
            {
                path: "basic",
                loadComponent: () => import("./basic/flex.basic").then((c) => c.FlexBasic),
            },
            {
                path: "justify",
                loadComponent: () => import("./justify/flex.justify").then((c) => c.FlexJustify),
            },
            {
                path: "align",
                loadComponent: () => import("./align/flex.align").then((c) => c.FlexAlign),
            },
            {
                path: "gap",
                loadComponent: () => import("./gap/flex.gap").then((c) => c.FlexGap),
            }
        ]
    }
];
