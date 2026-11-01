import { Component, inject, DOCUMENT, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
    template: "",
    imports: [RouterModule],
})
export abstract class Layout implements OnInit {
    protected readonly document: Document = inject<Document>(DOCUMENT);
    protected readonly themeKey: string = "theme";
    protected theme: string = "theme";

    public ngOnInit(): void {
        const themeKey = "theme";
        const defaultTheme = "system";

        let theme = localStorage.getItem(themeKey);

        if (theme === null) {
            theme = defaultTheme;

            localStorage.setItem(themeKey, defaultTheme);
        }

        this.theme = theme;

        this.document.documentElement.classList.add(theme);
    }
}