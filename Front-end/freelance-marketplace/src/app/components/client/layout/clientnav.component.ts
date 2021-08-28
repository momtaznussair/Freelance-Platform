import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-clientnav',
  templateUrl: './clientnav.component.html',
  styleUrls: ['./clientnav.component.css']
})
export class ClientnavComponent implements OnInit {
  x='search in freelancers';
  constructor(private userService : UserService , private router:Router) { }

  ngOnInit(): void {
  }
  setting(){
    this.router.navigateByUrl("/freelancer/settings/info");
  }

  logout(){
    this.userService.logout()
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
