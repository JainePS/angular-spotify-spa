import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators'


//Este decorador por ter um provideIn, é identificado automaticamente pelo Angular.
//Ou seja, não é necessário inserir em Módulos.
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  headers: HttpHeaders;
  
  constructor(private http: HttpClient) { 
    console.log('Spotify service ready!'); 
    
    this.headers = new HttpHeaders({
      'Authorization': 'Bearer BQDsmFbnJxFT1S7wGi8ljvFaye_79t6PYrH938Wt_iJxo3MfD4xP0wUxEzWOmkIvQQ6SRX_R8-iWxLbpOGI'
    });
  }
  
  getQuery(query: string){
    const SPOTIFY_URL = `https://api.spotify.com/v1${query}`;
    return this.http.get(SPOTIFY_URL, { headers: this.headers });
  }


  getNewRealeses() {

    return this.getQuery('/browse/new-releases?limit=20')
    .pipe( map( (data: any) => data['albums'].items));
  }
  

  getArtist(termino: string){
    
    return this.getQuery(`/search?q=${termino}&type=artist&limit=15&offset=1`)
    .pipe( map( (data: any) => data['artists'].items));
  }
}
