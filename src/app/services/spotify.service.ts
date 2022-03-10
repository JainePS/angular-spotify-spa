import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
//Este decorador por ter um provideIn, é identificado automaticamente pelo Angular.
//Ou seja, não é necessário inserir em Módulos.
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  SPOTIFY_URL = 'https://api.spotify.com';

  constructor(private http: HttpClient) { 
    console.log('Spotify service ready!'); 
  }

  getNewRealeses() {

   const headers = new HttpHeaders({
      'Authorization': 'Bearer BQDLXeDsKleJK9kB8iUhcxYk8zphu9d2Kg-vPlDjG7c2MVKpWW_a14LnHlQCIRd3g8Swo0UslOPmbVqI7OI'
      
    });
    
    return this.http.get(`${this.SPOTIFY_URL}/v1/browse/new-releases?limit=20`, {headers})
  }
}
