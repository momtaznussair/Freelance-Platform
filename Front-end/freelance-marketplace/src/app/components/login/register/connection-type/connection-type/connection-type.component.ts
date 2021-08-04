<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment.prod';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

@Component({
  selector: 'app-connection-type',
  templateUrl: './connection-type.component.html',
  styleUrls: ['./connection-type.component.css']
})
export class ConnectionTypeComponent implements OnInit {

<<<<<<< HEAD
  constructor(private router : Router , private userService : UserService , private http:HttpClient) { }
=======
  constructor() { }
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77

  ngOnInit(): void {
  }

<<<<<<< HEAD
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



=======
>>>>>>> e17b3d65997eacb6555202f5d49ac857581a3f77
}
