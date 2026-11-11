import { ViewContainerRef } from "@angular/core";

import { IHtmlElementVisitor, HtmlButton, HtmlInput, HtmlTextarea } from "./design.patterns.visitor.model";
import { DesignPatternsVisitorElementInput } from "./element/input/design.patterns.visitor.element.input";
import { DesignPatternsVisitorElementButton } from "./element/button/design.patterns.visitor.element.button";
import { DesignPatternsVisitorElementTextarea } from "./element/textarea/design.patterns.visitor.element.textarea";

export class DesignPatternsVisitorElement implements IHtmlElementVisitor<void> {
    constructor(private readonly vcr: ViewContainerRef) { }

    public visitButton(data: HtmlButton): void {
        const componentRef = this.vcr.createComponent(DesignPatternsVisitorElementButton);

        componentRef.instance.text.set(data.text);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitInput(data: HtmlInput): void {
        const componentRef = this.vcr.createComponent(DesignPatternsVisitorElementInput);

        componentRef.instance.placeholder.set(data.placeholder);

        componentRef.changeDetectorRef.detectChanges();
    }

    public visitTextarea(data: HtmlTextarea): void {
        const componentRef = this.vcr.createComponent(DesignPatternsVisitorElementTextarea);

        componentRef.instance.value.set(data.value);
        componentRef.instance.rows.set(data.rows);

        componentRef.changeDetectorRef.detectChanges();
    }
}
