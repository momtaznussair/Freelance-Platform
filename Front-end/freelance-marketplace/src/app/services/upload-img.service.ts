import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UploadImgService {

  constructor(private http:HttpClient) { }
   // Returns an observable
   upload(file:File):Observable<any> {
  
    // Create form data
    // const formData = new FormData(); 
      
    // Store form name as "file" with file data
    // formData.append("file", file,file.name);
      // console.log(formData);

    // Make http post request over api  with formData as req
    return this.http.post(`${environment.apiUrl}/register`, file)
}
}
