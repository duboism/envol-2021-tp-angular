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
    newHero: string = "Black Linux !"

    // Ajoute newHero si il n'est pas dans la liste
    addNewHero(): void {
        if (! this.superheroes.includes(this.newHero) ) {
            this.superheroes.push(this.newHero);
        }
    }
}
