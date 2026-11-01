import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule, RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Layout } from "../layout";

@Component({
    imports: [RouterModule, RouterOutlet, ReactiveFormsModule],
    selector: "app-layout-default",
    styleUrl: "./layout.default.css",
    templateUrl: "./layout.default.html",
})
export class LayoutDefault extends Layout implements OnInit {
    public readonly themeControl = new FormControl("light");
    public readonly loading: WritableSignal<boolean> = signal<boolean>(false);
    public readonly router: Router = inject<Router>(Router);

    public override ngOnInit(): void {
        super.ngOnInit();

        this.themeControl.setValue(this.theme);

        this.themeControl
            .valueChanges
            .subscribe((value: string | null) => {
                this.document.documentElement.classList.remove("light", "dark");

                if (value) {
                    this.document.documentElement.classList.add(value);

                    localStorage.setItem(this.themeKey, value);
                }
            });

        this.router
            .events
            .subscribe((event) => {
                console.log("eee", event);
                if (event instanceof NavigationStart) {
                    this.loading.set(true);
                }

                if (event instanceof NavigationEnd) {
                    this.loading.set(false);
                }
            });
    }
}
