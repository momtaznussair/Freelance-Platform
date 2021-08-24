import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  x='search';
  constructor(private userService : UserService , private router:Router) { }

  ngOnInit(): void {
  }
  setting(){
    this.router.navigateByUrl("/freelancer/settings/info");
  }

  logout(){
    this.userService.logout()
  }
  // freelancer(){

  //   this.x="search in freelancer";
  //   this.router.navigateByUrl("/freelancers");
  // }

  // jobs(){

  //   this.x="search in jobs";
  //   // this.router.navigateByUrl("/jobs");
  // }


 freelancer(){

    this.x="search in freelancer";
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
    this.Url=`/freelancers/${searchKeyword}`
    console.log(this.Url)
    alert('hi from freelancers');

  }else //search in jobs
  {
    this.Url=`/filter-jobs/${searchKeyword}`;
    console.log(this.Url)
    alert('hi from jobs')


  }
 //  this.router.navigateByUrl(this.Url);
 }

}


