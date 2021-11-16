import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  // Fonction d'initialisation (lancée une seule fois par Angular lorsque le composant est connecté)
  ngOnInit(): void {
    // Récupère la liste des super-héros et la stocke dans superheroes
    this.httpClient.get<string[]>('assets/superheroes.json').subscribe(data => {
      this.superheroes = data;
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
