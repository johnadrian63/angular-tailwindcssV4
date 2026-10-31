import { Component, inject, DOCUMENT, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    imports: [RouterModule, RouterOutlet, ReactiveFormsModule],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App implements OnInit {
    private readonly document: Document = inject<Document>(DOCUMENT);

    public readonly themeControl = new FormControl("light");

    public ngOnInit(): void {
        const themeKey = "theme";
        const defaultTheme = "system";
        let theme = localStorage.getItem(themeKey);

        if (theme === null) {
            theme = defaultTheme;

            localStorage.setItem(themeKey, defaultTheme);
        }

        this.document.documentElement.classList.add(theme);

        this.themeControl.setValue(theme);

        this.themeControl
            .valueChanges
            .subscribe((value: string | null) => {
                this.document.documentElement.classList.remove("light", "dark");

                if (value) {
                    this.document.documentElement.classList.add(value);

                    localStorage.setItem(themeKey, value);
                }
            });
    }
}
