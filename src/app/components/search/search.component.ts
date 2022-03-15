import { Component, Input } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})


export class SearchComponent {

  
  ARTISTS:any [] = [];
  loading: boolean;

  constructor(private spotify: SpotifyService) { 

  this.loading = true;

}
  buscar(termino: string){
    console.log(termino);    
    this.spotify.getArtist(termino).subscribe( (data: any) => {
      this.ARTISTS = data   
      this.loading = false;
    });    
  }
 


}
