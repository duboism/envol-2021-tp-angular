import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string = 'Bienvenue dans le TP Angular ENVOL 2021';

  constructor() { }

  ngOnInit(): void {
  }

}
