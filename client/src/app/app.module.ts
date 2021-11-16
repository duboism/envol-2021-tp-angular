import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import du service HttpClientModule
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuperHeroesListComponent } from './super-heroes-list/super-heroes-list.component';
import { HomeComponent } from './home/home.component';
import { SuperHeroesComponent } from './super-heroes/super-heroes.component';

@NgModule({
    declarations: [
        AppComponent,
        SuperHeroesListComponent,
        HomeComponent,
        SuperHeroesComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
