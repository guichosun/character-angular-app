import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  constructor(private http: HttpClient) {
    console.log('El servicio');
  }

  getQuery() {
    // The chhgaracters url to obtain the data
    const url = `https//192.168.0.15:8080/api/characters/`;
    console.log('the url ' + url);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(url, {
      headers,
    });
  }

  getAllCharacter() {
    console.log('call allCharacter');

    return this.getQuery().subscribe((data) => {
      console.log('data: ' + data);

      //data['data'].items
    });
  }
}
