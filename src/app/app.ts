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

    public readonly themeControl = new FormControl("theme-light");

    public ngOnInit(): void {
        this.document.documentElement.classList.add("theme-light");

        this.themeControl
            .valueChanges
            .subscribe((value) => {
                this.document.documentElement.classList.remove("theme-light", "theme-dark");

                if (value) {
                    this.document.documentElement.classList.add(value);
                }
            });
    }
}
