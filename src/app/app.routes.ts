import { Routes } from '@angular/router';

import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';

// the routes for app
export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'characters', component: CharacterComponent },
  { path: 'characters/:id', component: CharacterComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];
