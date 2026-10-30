import { Routes } from "@angular/router";

export const flexRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./flex").then((c) => c.Flex)
    }
];