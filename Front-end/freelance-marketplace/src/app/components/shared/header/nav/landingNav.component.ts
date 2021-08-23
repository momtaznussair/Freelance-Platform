import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-nav',
  templateUrl: './landingNav.component.html',
  styleUrls: ['./landingNav.component.css']
})
export class LandingNavComponent implements OnInit {
  x='search';
  // queryInJobs='';
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
  url:string='';
  freelancer(inpt:HTMLInputElement){
 
    this.x="search in freelancer";
    this.url=`freelancers/${inpt.value}`
    this.router.navigateByUrl(this.url);
  }

  jobs(inpt:HTMLInputElement){
  
    this.x="search in jobs";
    this.url=`freelancer/work/filter-jobs/${inpt.value}`
    this.router.navigateByUrl(this.url);
  }
}

