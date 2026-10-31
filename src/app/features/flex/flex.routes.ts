import { Routes } from "@angular/router";

export const flexRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./flex").then((c) => c.Flex),
        children: [
            {
                path: "",
                redirectTo: "parent",
                pathMatch: "full"
            },
            {
                path: "parent",
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
                    },
                    {
                        path: "basis",
                        loadComponent: () => import("./basis/flex.basis").then((c) => c.FlexBasis),
                    },
                    {
                        path: "",
                        outlet: "flex-nav",
                        loadComponent: () => import("./flex-parent-sidebar/flex.parent.sidebar").then((c) => c.FlexParentSidebar),
                    }
                ]
            },
            {
                path: "child",
                children: [
                    {
                        path: "",
                        redirectTo: "self-align",
                        pathMatch: "full"
                    },
                    {
                        path: "self-align",
                        loadComponent: () => import("./self-align/flex.self.align").then((c) => c.FlexSelfAlign),
                    },
                    {
                        path: "",
                        outlet: "flex-nav",
                        loadComponent: () => import("./flex-child-sidebar/flex.child.sidebar").then((c) => c.FlexChildSidebar),
                    }
                ]
            }
        ]
    },
]