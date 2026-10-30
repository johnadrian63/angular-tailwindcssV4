import { Routes } from '@angular/router';

import { buttonRoutes } from "./features/button/button.routes";
import { flexRoutes } from "./features/flex/flex.routes";
import { themeRoutes } from "./features/theme/theme.routes";

export const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/button"
    },
    {
        path: "button",
        children: [
            ...buttonRoutes
        ]
    },
    {
        path: "flex",
        children: [
            ...flexRoutes
        ]
    },
    {
        path: "theme",
        children: [
            ...themeRoutes
        ]
    }
];
