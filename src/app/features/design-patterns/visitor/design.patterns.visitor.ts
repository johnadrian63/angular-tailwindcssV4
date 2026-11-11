import { Component, OnInit, signal } from "@angular/core";

import { HtmlFactory, IHtmlElement } from "./design.patterns.visitor.model";
import { designPattersVisitorData } from "./design.patterns.visitor.data";
import { DesignPatternsVisitorResolver } from "./design.patterns.visitor.resolver";

@Component({
    imports: [DesignPatternsVisitorResolver],
    selector: "app-design-patterns-visitor",
    styleUrl: "./design.patterns.visitor.css",
    templateUrl: "./design.patterns.visitor.html",
})
export class DesignPatternsVisitor implements OnInit {
    public readonly elements = signal<IHtmlElement[]>([]);

    public ngOnInit(): void {
        const elements: IHtmlElement[] = [];

        for (let i = 0; i < designPattersVisitorData.length; i++) {
            const data = designPattersVisitorData[i];
            const model = HtmlFactory.create(data);

            elements.push(model);
        }

        this.elements.set(elements);
    }
}
