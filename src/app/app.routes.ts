import { Routes } from '@angular/router';

import { buttonRoutes } from "./features/button/button.routes";
import { themeRoutes } from "./features/theme/theme.routes";

export const routes: Routes = [
    {
        path: "button",
        children: [
            ...buttonRoutes
        ]
    },
    {
        path: "theme",
        children: [
            ...themeRoutes
        ]
    }
];
