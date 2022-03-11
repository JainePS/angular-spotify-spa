import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  ARTISTS:any [] = [];

  constructor(private spotify: SpotifyService) { }

  buscar(termino: string){
    console.log(termino);    
    this.spotify.getArtist(termino).subscribe( (Artists: any) => {
      this.ARTISTS = Artists.artists.items      
    });    
    return this.ARTISTS
  }
 


}
