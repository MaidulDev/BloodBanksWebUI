import {Component, OnInit} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(public auth:AuthService,private http: HttpClient){
    auth.loginWithRedirect();
  }


}




















//garbage


// auth.isAuthenticated$.subscribe(x=>{
//   if (!x){
//     auth.loginWithRedirect();
//     // this.http
//     //   .get(`https://api.unibit.ai/v2/stock/historical/?tickers=AAPL&accessKey=demo`)
//     //   .subscribe((result: any) => {
//     //     console.log("ss"+result)
//     //   });
//   }
//   else {
//     this.http
//       .get(`https://api.unibit.ai/v2/stock/historical/?tickers=AAPL&accessKey=demo`)
//       .subscribe((result: any) => {
//         console.log("ss"+result)
//       });
//   }
// })
