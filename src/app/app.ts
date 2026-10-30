import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
    imports: [RouterModule, RouterOutlet],
    selector: 'app-root',
    styleUrl: './app.css',
    templateUrl: './app.html',
})
export class App { }
