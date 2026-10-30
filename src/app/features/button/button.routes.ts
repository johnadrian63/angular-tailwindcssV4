import { Routes } from "@angular/router";

export const buttonRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./button").then((c) => c.Button)
    }
];