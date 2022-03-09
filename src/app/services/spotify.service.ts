import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//Este decorador por ter um provideIn, é identificado automaticamente pelo Angular.
//Ou seja, não é necessário inserir em Módulos.
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log('Spotify service ready!');
    
  }

  getNewRealeses(){

    const headers = new HttpHeaders({

      'Authorization': 'Bearer BQA1ocIS-PsxbVVqUPtYHapXf_fXY8GzS9v9vERF2Z8UJx_yiuveGRcG2-fmsipMeijXr-8V9mmKfWfvPEc'

    });

    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', {headers})
        .subscribe(data => {
          console.log(data);
          
        })
  }


}
