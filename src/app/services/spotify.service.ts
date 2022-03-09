import { Injectable } from '@angular/core';

//Este decorador por ter um provideIn, é identificado automaticamente pelo Angular.
//Ou seja, não é necessário inserir em Módulos.
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor() { 
    console.log('Spotify service ready!');
    
  }

  getNewREaleses(){

  }


}
