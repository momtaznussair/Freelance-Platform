import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  x='search in freelancers';
  constructor(private userService : UserService , private router:Router) { }
userName:any
userData:any;
currentUserData:any
  ngOnInit(): void {
    this.currentUserData = localStorage.getItem('user_data');
  this.userData=JSON.parse(this.currentUserData)
  this.userName=`${this.userData.first_name} ${this.userData.last_name}`;
   
// console.log(this.userData)

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
 //  this.router.navigateByUrl(this.Url);
 }

}

}
