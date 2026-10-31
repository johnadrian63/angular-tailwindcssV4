import { Routes } from '@angular/router';

import { buttonRoutes } from "./features/button/button.routes";
import { flexRoutes } from "./features/flex/flex.routes";
import { themeRoutes } from "./features/theme/theme.routes";
import { gridRoutes } from "./features/grid/grid.routes";

export const routes: Routes = [
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
];
