import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterService } from './services/character.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, CharacterComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    HttpClientModule,
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
