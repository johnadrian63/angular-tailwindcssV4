import { Route } from "@angular/router";

export const exampleRoutes: Route[] = [
    {
        path: "",
        redirectTo: "template1",
        pathMatch: "full"
    },
    {
        path: "template1",
        loadComponent: () => import("./template1/example.template1").then((c) => c.ExampleTemplate1)
    }
];