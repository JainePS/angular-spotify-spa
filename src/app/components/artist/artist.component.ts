import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],
})
export class ArtistComponent {
  artist: any = [];
  loading: boolean;
  topTracks: any [] = [];
  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    
    this.loading = true;
    this.router.params.subscribe((params: any) => {
       this.getArtist(params.id);
       this.getTopTracks(params.id);
    });
  }
  getArtist(id: string) {
    this.spotify.getArtist(id).subscribe((artist: any) => {
      this.artist = artist;
      console.log(artist);

      this.loading = false;
    });
  }

  getTopTracks(id: string) {
    this.spotify.getTopTracks(id).subscribe((toptracks: any) => {
      this.topTracks = toptracks;
      console.log(this.topTracks);
      
      return this.topTracks

      // this.loading = false;
    });
  }
}
