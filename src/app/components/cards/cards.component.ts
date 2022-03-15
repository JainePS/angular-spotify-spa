import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  @Input() items: any = [];

  constructor( private router: Router ) { }

  lookArtist( thing: any ){
    
    let artistId: string = '';

    if( thing.type === 'artist'){
       artistId = thing.id;
    }else{
       artistId = thing.artists[0].id
    }
    console.log(artistId);
    this.router.navigate(['/artist', artistId])
  }

}
