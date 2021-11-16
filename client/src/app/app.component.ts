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
    newHero: string = "Black Linux !";
    newHeroAdded: boolean = false;

    // Ajoute newHero si il n'est pas dans la liste et désactive le bouton
    addNewHero(): void {
        if (! this.newHeroAdded ) {
            this.superheroes.push(this.newHero);
            this.newHeroAdded = true;
        }
    }
}
