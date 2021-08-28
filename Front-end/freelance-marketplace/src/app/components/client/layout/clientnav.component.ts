import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-clientnav',
  templateUrl: './clientnav.component.html',
  styleUrls: ['./clientnav.component.css']
})
export class ClientnavComponent implements OnInit {
  x='search';
  constructor(private userService : UserService , private router:Router) { }
  userName:any
  userData:any;
  currentUserData:any
    ngOnInit(): void {
      this.currentUserData = localStorage.getItem('user_data');
    this.userData=JSON.parse(this.currentUserData)
    this.userName=`${this.userData.first_name} ${this.userData.last_name}`;}
    
  setting(){
    this.router.navigateByUrl("/freelancer/settings/info");
  }

  logout(){
    this.userService.logout()
  }
  freelancer(){
 
    this.x="search in freelancer";
    this.router.navigateByUrl("/freelancer");
  }

  jobs(){
   
    this.x="search in jobs";

  }

}
