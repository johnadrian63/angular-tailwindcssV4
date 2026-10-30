import { Routes } from "@angular/router";

export const themeRoutes: Routes = [
    {
        path: "",
        loadComponent: () => import("./theme").then((c) => c.Theme)
    }
];