  import { Component, OnInit } from '@angular/core';
  import { HttpClient } from '@angular/common/http';

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {

    countries:any[] = [];
    
    constructor(private http: HttpClient) { 
      console.log('funciona essa poronga');
      
      this.http.get('https://restcountries.com/v3.1/lang/por')
            .subscribe( (answ: any) => {

              this.countries = answ;
              console.log(answ);
              
            })
    }
    
    ngOnInit(): void {
    }
    
  }
