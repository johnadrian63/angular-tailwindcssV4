import { Component, inject, input, model } from "@angular/core";
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import { IVerticalMenuItem } from "../vertical.menu.model";
import { VerticalMenuService } from "../vertical.menu.service";

@Component({
    selector: "app-vertical-menu-expand",
    templateUrl: "./vertical.menu.expand.html",
    styleUrl: "./vertical.menu.expand.css",
    imports: [FaIconComponent]
})
export class VerticalMenuExpand {
    public readonly menu = model.required<IVerticalMenuItem>();
    public readonly faAngleRightIcon = faAngleRight;
    public readonly verticalMenuService = inject<VerticalMenuService>(VerticalMenuService);

    public expand(parent: IVerticalMenuItem, children: IVerticalMenuItem[]): void {
        this.verticalMenuService.setMenu(parent, children);
        // this.animate();

        // this.selectedMenus.update((menus) => {
        //     menus.push({
        //         parent,
        //         children: menuList
        //     });

        //     return menus;
        // });
    }
}