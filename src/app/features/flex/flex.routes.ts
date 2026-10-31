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
                loadComponent: () => import("./flex-parent/flex.parent").then((c) => c.FlexParent),
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
                        loadComponent: () => import("./flex-parent/nav/flex.parent.nav").then((c) => c.FlexParentNav),
                    }
                ]
            },
            {
                path: "child",
                loadComponent: () => import("./flex-child/flex.child").then((c) => c.FlexChild),
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
                        path: "align-items",
                        loadComponent: () => import("./align-items/flex.align.items").then((c) => c.FlexAlignItems),
                    },
                    {
                        path: "grow",
                        loadComponent: () => import("./grow/flex.grow").then((c) => c.FlexGrow),
                    },
                    {
                        path: "shrink",
                        loadComponent: () => import("./shrink/flex.shrink").then((c) => c.FlexShrink),
                    },
                    {
                        path: "",
                        outlet: "flex-nav",
                        loadComponent: () => import("./flex-child/nav/flex.child.nav").then((c) => c.FlexChildNav),
                    }
                ]
            }
        ]
    },
]