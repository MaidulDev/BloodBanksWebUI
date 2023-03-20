import {Component, OnInit} from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  //public v:Observable<string>=this.auth.getAccessTokenSilently();

  constructor(public auth:AuthService,private http: HttpClient){}

  ngOnInit(): void {

    this.auth.isAuthenticated$.subscribe(x=>{
      if (!x){
        debugger
        this.auth.loginWithRedirect();
        this.auth.getAccessTokenSilently().subscribe(x=>{
          this.http
            .get(`https://api.unibit.ai/v2/stock/historical/?tickers=AAPL&accessKey=demo`)
            .subscribe((result: any) => {
              console.log("ss"+result)
            });
          }

        );

      }
      else {
        this.http
          .get(`http://localhost:30200/api/books-menu`)

          .subscribe((result: any) => {
            console.log("ss"+result)
          });

        this.auth.error$.subscribe(error => {
          console.log("g-"+error)
        });

      }
    })




//.get(`https://api.unibit.ai/v2/stock/historical/?tickers=AAPL&accessKey=demo`)
    //
    // this.v.subscribe(x=>{
    //   console.log(x)
    // })





  }

}
