import { Component, model } from "@angular/core";

@Component({
    selector: "app-design-patterns-visitor-element-textarea",
    templateUrl: "./design.patterns.visitor.element.textarea.html"
})
export class DesignPatternsVisitorElementTextarea {
    public readonly value = model.required<string>();
    public readonly rows = model.required<number>();
}