import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title: string = 'client';
    superheroes: string[] = [
        'Hulk', 'Spider-Man', 'Thor', 'Iron Man'
    ];
}
