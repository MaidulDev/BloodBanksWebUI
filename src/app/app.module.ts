import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AuthModule, HttpMethod} from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { HeaderComponent } from './component/header/header.component';
import { HomepageComponent } from './component/homepage/homepage/homepage.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { AuthHttpInterceptor } from '@auth0/auth0-angular';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent, HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule.forRoot({...environment.auth,
      httpInterceptor: {
        allowedList: [],
      },
    }),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthHttpInterceptor,
    multi: true,
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
