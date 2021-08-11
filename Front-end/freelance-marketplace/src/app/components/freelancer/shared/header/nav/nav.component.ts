import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService : UserService , private router:Router) { }

  ngOnInit(): void {
  }
  setting(){
    this.router.navigateByUrl("/freelancer/settings/info");
  }

  logout(){
    this.userService.logout()
  }

}
