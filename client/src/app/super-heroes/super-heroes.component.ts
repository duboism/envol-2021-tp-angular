import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
// Pour simuler un délai
import { delay } from "rxjs/operators";


@Component({
  selector: 'app-super-heroes',
  templateUrl: './super-heroes.component.html',
  styleUrls: ['./super-heroes.component.scss']
})
export class SuperHeroesComponent implements OnInit {

  superheroes: string[] = [];
  newHero: string = "Black Linux !";
  newHeroAdded: boolean = false;
  // Service HttpClient
  private httpClient: HttpClient;
  // Indique si le chargement est en cours ou fini
  superheroesIsLoading: boolean = false;
  superheroesIsLoaded: boolean = false;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // Fonction d'initialisation (lancée une seule fois par Angular lorsque le composant est connecté)
  ngOnInit(): void {
    // Indique qu'on commence le chargement
    this.superheroesIsLoading = true;
    // Récupère la liste des super-héros et la stocke dans superheroes (on ajoute un délai pour simuler la latence)
    this.httpClient
      .get<string[]>('assets/superheroes.json')
      .pipe(delay(5000))
      .subscribe(data => {
        this.superheroes = data;
        // Indique que le chargement est fini
        this.superheroesIsLoading = false;
        this.superheroesIsLoaded = true;
      });
  }

  // Ajoute newHero si il n'est pas dans la liste et désactive le bouton
  addNewHero(): void {
    if (! this.newHeroAdded ) {
      this.superheroes.push(this.newHero);
      this.newHeroAdded = true;
    }
  }
}
