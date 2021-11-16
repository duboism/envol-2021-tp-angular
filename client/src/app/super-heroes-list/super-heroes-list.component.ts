import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-super-heroes-list',
  templateUrl: './super-heroes-list.component.html',
  styleUrls: ['./super-heroes-list.component.scss']
})
export class SuperHeroesListComponent implements OnInit {

  @Input() superheroes: string[] = [];
  @Input() newHeroAdded: boolean = false;
  @Output() addNewHero: EventEmitter<{}> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
