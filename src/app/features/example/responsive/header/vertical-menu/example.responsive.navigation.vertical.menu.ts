import { Component, inject, OnInit } from "@angular/core";

import { VerticalMenu } from "../../../../shared/vertical-menu/vertical.menu";
import { VerticalMenuService } from "../../../../shared/vertical-menu/vertical.menu.service";
import { verticalMenuDataMock } from "../../../../shared/vertical-menu/vertical.menu.data.mock";
import { ExampleResponsiveNavigationVerticalMenuService } from "./example.responsive.navigation.vertical.menu.service";

@Component({
    selector: "app-example-responsive-navigation-vertical-menu",
    styleUrl: "./example.responsive.navigation.vertical.menu.css",
    templateUrl: "./example.responsive.navigation.vertical.menu.html",
    imports: [VerticalMenu],
    providers: [
        ExampleResponsiveNavigationVerticalMenuService,
        {
            provide: VerticalMenuService,
            useExisting: ExampleResponsiveNavigationVerticalMenuService,
        }
    ],
})
export class ExampleResponsiveNavigationVerticalMenu implements OnInit {
    private readonly verticalMenuService = inject<ExampleResponsiveNavigationVerticalMenuService>(ExampleResponsiveNavigationVerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.data.set(verticalMenuDataMock);
    }
}
