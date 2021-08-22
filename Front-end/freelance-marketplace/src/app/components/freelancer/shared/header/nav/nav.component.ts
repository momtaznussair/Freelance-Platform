import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private userService : UserService , private router:Router) { }

  ngOnInit(): void {
  }


  logout(){
    this.userService.logout();
    this.router.navigateByUrl('/user');
  }

}
