import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private api:ApiService) { }
  getCategories(url : string):Observable<any>{
    return this.api.get(`${environment.apiUrl}/${url}`)
  }

}
