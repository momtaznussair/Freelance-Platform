// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class JobPostsService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const endpoint = 'https://jsonplaceholder.typicode.com/posts';

@Injectable({
  providedIn: 'root'
})

export class JobPostsService{

  constructor(private http: HttpClient) { }

  getAllPosts(params:any): Observable<any> {
    return this.http.get(endpoint, { params });
  }

}