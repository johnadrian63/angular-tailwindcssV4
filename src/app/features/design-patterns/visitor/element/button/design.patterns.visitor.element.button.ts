import { Component, model } from "@angular/core";

@Component({
    selector: "app-design-patterns-visitor-element-button",
    templateUrl: "./design.patterns.visitor.element.button.html"
})
export class DesignPatternsVisitorElementButton {
    public readonly text = model.required<string>();
}