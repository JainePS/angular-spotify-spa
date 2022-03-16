import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent {

  artist: any = [];
  loading: boolean;
  constructor( private router: ActivatedRoute,
              private spotify: SpotifyService ) { 


    this.loading = true;

    this.router.params.subscribe( (params: any) => {
      // console.log(params.id);
      
      this.getArtist(params.id)
    
    });

  }
  getArtist(id: string){
console.log('1');

    this.spotify.getArtist(id).subscribe((artist: any) => {
      this.artist = artist
      console.log(artist);
    
      this.loading = false;    
    });
  }

}
