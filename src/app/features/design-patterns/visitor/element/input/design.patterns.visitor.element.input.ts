import { Component, model } from "@angular/core";

@Component({
    selector: "app-design-patterns-visitor-element-input",
    templateUrl: "./design.patterns.visitor.element.input.html"
})
export class DesignPatternsVisitorElementInput {
    public readonly value = model.required<string>();
    public readonly placeholder = model.required<string>();
}