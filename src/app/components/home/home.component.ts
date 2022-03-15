  import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
  

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent {
    albums: any [] = [];
    newSongs: any [] = [];

    constructor(private spotify: SpotifyService) { 

    this.spotify.getNewRealeses()
      .subscribe( (newReleases: any) => {
        this.albums = newReleases;
        console.log(this.albums);
    
        }); 
   }
      
    parseArtistName( artistsArray: any[] ) {
      let artistas:string [] = [];
      for (let index = 0; index < artistsArray.length; index++) {
        artistas[index] = artistsArray[index].name;
      }     
      // for (let index = 0; index < artistsArray.length; index++) {
      //   if (artistas == '') {
      //     artistas = artistsArray[index].name
      //   } else {
      //     artistas = `${artistas}, ${artistsArray[index].name}`
      //   } 
      // }

      return artistas
    }    
  }

  