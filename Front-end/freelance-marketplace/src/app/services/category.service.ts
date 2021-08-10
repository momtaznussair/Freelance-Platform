import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private api:ApiService) { }
  getCategories():Observable<any>{
    return this.api.get("http://127.0.0.1:8000/api/categories")
  };
  post(url:string,body:any){
    return this.api.post(url,body);
  }
}
