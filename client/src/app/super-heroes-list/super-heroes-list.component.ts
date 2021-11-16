import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-heroes-list',
  templateUrl: './super-heroes-list.component.html',
  styleUrls: ['./super-heroes-list.component.scss']
})
export class SuperHeroesListComponent implements OnInit {

  @Input() superheroes: string[] = [];
  newHero: string = "Black Linux !";
  newHeroAdded: boolean = false;

  // Ajoute newHero si il n'est pas dans la liste et désactive le bouton
  addNewHero(): void {
    if (! this.newHeroAdded ) {
      this.superheroes.push(this.newHero);
      this.newHeroAdded = true;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
