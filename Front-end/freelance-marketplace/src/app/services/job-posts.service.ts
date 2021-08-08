import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { ApiService } from './api.service';

// const endpoint = 'http://127.0.0.1:8000/api';

@Injectable({
  providedIn: 'root'
})

export class JobPostsService{

  constructor(private api:ApiService) { }

  getAllCategories(params:any): Observable<any> {
    return this.api.get('/categories');
  }
 
}