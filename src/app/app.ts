import { Component, inject, DOCUMENT, OnInit, WritableSignal, signal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
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

    public readonly loading: WritableSignal<boolean> = signal<boolean>(true);

    public readonly router: Router = inject<Router>(Router);

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

        this.router
            .events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.loading.set(true);
                }

                if (event instanceof NavigationEnd) {
                    this.loading.set(false);
                }
            });
    }
}
