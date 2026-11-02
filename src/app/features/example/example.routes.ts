import { Route } from "@angular/router";

export const exampleRoutes: Route[] = [
    {
        path: "",
        redirectTo: "basic",
        pathMatch: "full"
    },
    {
        path: "basic",
        loadComponent: () => import("./basic/example.basic").then((c) => c.ExampleBasic)
    },
    {
        path: "responsive",
        loadComponent: () => import("./responsive/example.responsive").then((c) => c.ExampleResponsive)
    }
];