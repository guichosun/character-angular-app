import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

// The api's url
const URL_API = environment.apiCharacters;

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {
    console.log('El servicio');
  }

  getQuery() {
    // The chhgaracters url to obtain the data
    console.log('the URL_API ' + URL_API);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(URL_API, {
      headers,
    });
  }

  getAllCharacter() {
    console.log('call allCharacter');

    return this.getQuery().subscribe((data) => {
      console.log('data: ' + data);

      //data['data'].items
    }, (error) => {
      // Maneja el error en caso de que ocurra
      console.error(error);
    });
  }
}
