import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {

  momtazArray:any={
    "category":"",
    "overview":"",
    "title":"",
    "skills":[],
    "expertiselevel":2,
    "education":[],
   "language":[],
   "service fee":2,
   "location":[]
}
  constructor() { }
 
}
