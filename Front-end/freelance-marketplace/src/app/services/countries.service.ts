import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private http:HttpClient) { }
  
}
