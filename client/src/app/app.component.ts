import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// Pour simuler un délai
import { delay } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string = 'Bienvenue dans le TP Angular ENVOL 2021';
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
