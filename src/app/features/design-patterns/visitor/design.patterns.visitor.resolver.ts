import { Component, inject, input, InputSignal, OnInit, ViewContainerRef } from "@angular/core";

import { IHtmlElement } from "./design.patterns.visitor.model";
import { DesignPatternsVisitorElement } from "./design.patterns.visitor.element";

@Component({
    selector: "app-design-patterns-visitor-resolver",
    template: ""
})
export class DesignPatternsVisitorResolver implements OnInit {
    public readonly element: InputSignal<IHtmlElement | null> = input<IHtmlElement | null>(null);

    private readonly vcr: ViewContainerRef = inject<ViewContainerRef>(ViewContainerRef);

    public ngOnInit(): void {
        this.element()?.accept(new DesignPatternsVisitorElement(this.vcr));
    }
}
