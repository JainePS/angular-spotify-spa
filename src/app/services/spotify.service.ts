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
      'Authorization': 'Bearer BQBQpMINz_RznVKOFx8jR2Xhp7WQlvZngFh-88Rk_d3dtQYRG2l0fQce9jt2TzrjJ6JpFSi7g45S1q5heiY'
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
  

  getArtists(termino: string){
    
    return this.getQuery(`/search?q=${termino}&type=artist&limit=15&offset=1`)
    .pipe( map( (data: any) => data['artists'].items));
  }

  getArtist(id: string){
    
    return this.getQuery(`/artists/${id}`)
    
    
    // .pipe( map( (data: any) => data['artists'].items));
  }

}
