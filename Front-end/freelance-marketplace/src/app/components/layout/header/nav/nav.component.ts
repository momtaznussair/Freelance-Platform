import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  sign(){
    this.router.navigateByUrl("/user/signup");
  }
  log(){
    this.router.navigateByUrl("/user");
  }
  freelancer(){
    // put the route freelancer =>/user
    // this.router.navigateByUrl("/user");
  }
  jobs(){
     // put the route jobs =>/user
    // this.router.navigateByUrl("/user");
  }
}

