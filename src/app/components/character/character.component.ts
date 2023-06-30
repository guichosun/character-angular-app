import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: [],
})
export class CharacterComponent implements OnInit {

  // The characters property
  characters?:Observable<any>;
  constructor(private characterService: CharacterService) {}

  ngOnInit(): void {
    console.log('Va a query');

    this.characterService.getAllCharacter();
  }
}
