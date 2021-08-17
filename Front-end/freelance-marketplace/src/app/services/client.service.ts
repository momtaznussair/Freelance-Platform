import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private api:ApiService) { }
  getClient(id:string):Observable<any>{
    return this.api.get("http://127.0.0.1:8000/api/clients/"+id);
  }
}
