import { Component, OnInit } from "@angular/core";

import { HtmlFactory, HtmlRenderer } from "./design.patterns.visitor.model";
import { designPattersVisitorData } from "./design.patterns.visitor.data";

@Component({
    imports: [],
    selector: "app-design-patterns-visitor",
    styleUrl: "./design.patterns.visitor.css",
    templateUrl: "./design.patterns.visitor.html",
})
export class DesignPatternsVisitor implements OnInit {
    public ngOnInit(): void {
        for (let i = 0; i < designPattersVisitorData.length; i++) {
            const data = designPattersVisitorData[i];
            const model = HtmlFactory.create(data);


            model.accept(new HtmlRenderer());
        }
    }
}
