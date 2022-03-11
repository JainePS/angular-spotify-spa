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
      'Authorization': 'Bearer BQCuJtxczGNH1BpN5cRaVp7MBCe8OjL0sV2cUqEP_AO7VPnxtjr2d7kYnzWMWC3n5HWqzMGtqunQBWZILCE'
      
    });
    
    return this.http.get(`${this.SPOTIFY_URL}/v1/browse/new-releases?limit=20`, {headers})
  }

  getArtist(termino: string){
    const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCbmzmfHjJjMnGU2EhiMvShQJ2rOpxCLkjZziessekX76OfetVNdwmzhX8-x5nvG6cePW5jw3Fg59TdluZo676QSGjrs1xa-7EhHKjCa7jUlnIQDfeHwg2qI8fCA4dEj-PBNhipRIc-7U7mUIG1DQGfSG2P2Zybrqg'
    });
    
    return this.http.get(`${this.SPOTIFY_URL}/v1/search?q=${termino}&type=artist&limit=15&offset=1`, {headers})
    
  }
}
