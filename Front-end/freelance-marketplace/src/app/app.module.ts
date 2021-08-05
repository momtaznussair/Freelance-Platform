import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule , HTTP_INTERCEPTORS} from '@angular/common/http';
import {AccordionModule} from 'primeng/accordion';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AccordionModule,
    FormsModule,
  ],
  providers: [
    { 
      provide : HTTP_INTERCEPTORS,
      useClass : TokenInterceptorService,
      multi : true,
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
