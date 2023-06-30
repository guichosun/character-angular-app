import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styles: [],
})
export class CharacterComponent implements OnInit {
  constructor(characterService: CharacterService) {}

  ngOnInit(): void {}
}
