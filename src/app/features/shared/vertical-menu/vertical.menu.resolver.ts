import { Component, inject, input, OnInit, ViewContainerRef } from "@angular/core";
import { VerticalMenuService } from "./vertical.menu.service";
import { IVerticalMenuItem } from "./vertical.menu.model";


@Component({
    selector: "app-vertical-menu-resolver",
    template: ""
})
export class VerticalMenuResolver implements OnInit {
    public readonly menu = input.required<IVerticalMenuItem>();
    private readonly vcr = inject<ViewContainerRef>(ViewContainerRef);
    private readonly verticalMenuService = inject<VerticalMenuService>(VerticalMenuService);

    public ngOnInit(): void {
        this.verticalMenuService.handleData(this.vcr, this.menu());
    }
}