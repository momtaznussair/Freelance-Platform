import { UserService } from 'src/app/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'landing-nav',
  templateUrl: './landingNav.component.html',
  styleUrls: ['./landingNav.component.css']
})
export class LandingNavComponent implements OnInit {
  x='search in freelancers';
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
  freelancer(){
 
    this.x="search in freelancers";
    this.searchFlag=true;
 }

 jobs(){
  
   this.x="search in jobs";
   this.searchFlag=false;
 }
 searchFlag:boolean=true; //jobs
 Url:string='';

 search(searchKeyword:string){
   
  if(this.searchFlag) //search in freelancers
  {
    this.Url=`freelancers/${searchKeyword}`
 

  }else //search in jobs
  {
    this.Url=`/freelancer/work/filter-jobs/${searchKeyword}`;
 
  }
  this.router.navigateByUrl(this.Url);
 }

}

