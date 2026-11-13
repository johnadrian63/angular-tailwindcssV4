import { Component, effect, viewChild, ViewContainerRef } from "@angular/core";

import { NgVcrExampleTemplate } from "./example-template/ng.vcr.example.template";


@Component({
    imports: [],
    selector: "app-ng.vcr",
    styleUrl: "./ng.vcr.css",
    templateUrl: "./ng.vcr.html",
})
export class NgVcr {
    public template = viewChild("template", { read: ViewContainerRef });

    constructor() {
        effect(() => {
            this.template()?.createComponent(NgVcrExampleTemplate);
        });
    }
}