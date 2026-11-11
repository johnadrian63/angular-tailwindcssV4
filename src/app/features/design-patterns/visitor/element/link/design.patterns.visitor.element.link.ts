import { Component, model } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-design-patterns-visitor-element-link",
    templateUrl: "./design.patterns.visitor.element.link.html",
    imports: [RouterLink]
})
export class DesignPatternsVisitorElementLink {
    public readonly text = model.required<string>();
    public readonly url = model.required<string | string[]>();
}
