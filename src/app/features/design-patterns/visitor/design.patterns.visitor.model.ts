import { ViewContainerRef } from "@angular/core";

import { DesignPatternsVisitorElementInput } from "./element/input/design.patterns.visitor.element.input";
import { DesignPatternsVisitorElementButton } from "./element/button/design.patterns.visitor.element.button";
import { DesignPatternsVisitorElementTextarea } from "./element/textarea/design.patterns.visitor.element.textarea";

export interface IHtmlElement {
    type: string;

    accept<T>(visitor: IHtmlElementVisitor<T>): T;
}

export interface IHtmlButton extends IHtmlElement {
    text: string;
}

export interface IHtmlInput extends IHtmlElement {
    value: string;
    placeholder: string;
}

export interface IHtmlTextArea extends IHtmlElement {
    value: string;
    rows: number;
}

export interface IHtmlElementVisitor<T> {
    visitButton(data: HtmlButton): T;
    visitInput(data: HtmlInput): T;
    visitTextarea(data: HtmlTextarea): T;
}

function hasValue(data: unknown): data is object & { type: string } {
    return !!data && typeof data === "object" && "type" in data && typeof data.type === "string";
}

function isHtmlButton(data: unknown): data is IHtmlButton {
    return hasValue(data) && data.type === "button";
}

function isInput(data: unknown): data is IHtmlInput {
    return hasValue(data) && "type" in data && data.type === "input";
}

function isTextarea(data: unknown): data is IHtmlTextArea {
    return hasValue(data) && "type" in data && data.type === "textarea";
}

export class HtmlFactory {
    public static create(data: unknown): IHtmlElement {
        if (isHtmlButton(data)) {
            return new HtmlButton(data);
        }

        if (isInput(data)) {
            return new HtmlInput(data);
        }

        if (isTextarea(data)) {
            return new HtmlTextarea(data);
        }

        throw new Error("data not supported");
    }
}

export class HtmlButton implements IHtmlButton {
    public type: string = "button";
    public text: string;

    constructor(data: IHtmlButton) {
        this.text = data.text;
    }

    public accept<T>(visit: IHtmlElementVisitor<T>): T {
        return visit.visitButton(this);
    }
}

export class HtmlInput implements IHtmlInput {
    public type: string = "input";
    public value: string;
    public placeholder: string;

    constructor(data: IHtmlInput) {
        this.value = data.value;
        this.placeholder = data.placeholder;
    }

    public accept<T>(visit: IHtmlElementVisitor<T>): T {
        return visit.visitInput(this);
    }
}

export class HtmlTextarea implements IHtmlTextArea {
    public type: string = "textarea";
    public value: string;
    public rows: number;

    constructor(data: IHtmlTextArea) {
        this.value = data.value;
        this.rows = data.rows;
    }

    public accept<T>(visitor: IHtmlElementVisitor<T>): T {
        return visitor.visitTextarea(this);
    }
}

export class HtmlRenderer implements IHtmlElementVisitor<void> {
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