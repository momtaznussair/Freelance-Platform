import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FormsModule } from '@angular/forms';

//start of import social login modules
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { AuthService } from 'src/app/_services/auth.service';
import { GoogleLoginProvider} from "angularx-social-login";
import { TestLoginComponent } from './test/test-login/test-login.component';


let config = new AuthServiceConfig([
  {
  id: GoogleLoginProvider.PROVIDER_ID,
  provider: new GoogleLoginProvider("391081912414-s4puc43hobm8vf5ll3231d465lk9t3tq.apps.googleusercontent.com")
  }
  ]);

  export function provideConfig() {
    return config;
  }


@NgModule({
  declarations: [
    AppComponent,
    TestLoginComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    FormsModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true,
    },
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
