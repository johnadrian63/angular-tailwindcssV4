import { Routes } from "@angular/router";

export const designPatternRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./design.patterns").then((c) => c.DesignPatterns),
        children: [
            {
                path: "",
                redirectTo: "visitor",
                pathMatch: "full"
            },
            {
                path: "visitor",
                loadComponent: () => import("./visitor/design.patterns.visitor").then((c) => c.DesignPatternsVisitor),
            }
        ]
    }
];
