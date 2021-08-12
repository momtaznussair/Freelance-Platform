import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  x='search';
  // constructor(private router : Router) { }

  isUserLogged : boolean = false;

  constructor(private router : Router , private userService : UserService) {}

  ngOnInit(): void {

    // this.userService.getLoggedStatus().subscribe(res=>{
    //   console.log(res);
    //   this.isUserLogged = res;
    // })

    if(this.userService.isLogged()){
      this.isUserLogged = true;
    }
  }

  signUp(){
    this.router.navigateByUrl("/user/signup/main");
  }

  login(){
    this.router.navigateByUrl("/user");
  }

  logout(){
    this.userService.logout();
  }

  freelancer(){
 
    this.x="search in freelancer";
    this.router.navigateByUrl("/freelancer");
  }

  jobs(){
   
    this.x="search in jobs";

  }
}

