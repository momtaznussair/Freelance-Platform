import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})

export class JobPostsService{

  constructor(private api:ApiService) { }

  getAllCategories(url:string): Observable<any> {
    return this.api.get(url);
  }

}