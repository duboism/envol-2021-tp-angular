import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-super-heroes-list',
  templateUrl: './super-heroes-list.component.html',
  styleUrls: ['./super-heroes-list.component.scss']
})
export class SuperHeroesListComponent implements OnInit {

  @Input() superheroes: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
