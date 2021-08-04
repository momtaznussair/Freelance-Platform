import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-connection-type',
  templateUrl: './connection-type.component.html',
  styleUrls: ['./connection-type.component.css']
})
export class ConnectionTypeComponent implements OnInit {

  constructor(private router : Router , private userService : UserService , private http:HttpClient) { }

  ngOnInit(): void {
  }

  redirectGoogle(){
    this.router.navigateByUrl(`${environment.apiUrl}/auth/google/redirect`)
    this.http.get(`${environment.apiUrl}/auth/google/redirect`).subscribe(response=>{
      console.log(response);
    }, error =>console.error);
  }

  redirectLinked(){
    this.http.get(`${environment.apiUrl}/auth/linkedin/redirect`).subscribe(response=>{
      console.log(response);
    })
    // this.router.navigateByUrl(`${environment.apiUrl}/auth/google/redirect`)
  }



}
