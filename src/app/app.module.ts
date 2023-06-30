import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTING } from './app.routes';
import { CharacterComponent } from './components/character/character.component';
import { HomeComponent } from './components/home/home.component';
import { CharacterService } from './services/character.service';

@NgModule({
  declarations: [AppComponent, HomeComponent, CharacterComponent],
  imports: [BrowserModule, AppRoutingModule, APP_ROUTING],
  providers: [CharacterService],
  bootstrap: [AppComponent],
})
export class AppModule {}
