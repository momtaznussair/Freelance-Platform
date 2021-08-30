import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-join-world',
  templateUrl: './join-world.component.html',
  styleUrls: ['./join-world.component.css']
})
export class JoinWorldComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  freelancer(){
    // put the route freelancer =>/user
    this.router.navigateByUrl("/freelancers");
  }
  jobs(){
     // put the route jobs =>/user
    this.router.navigateByUrl("freelancer/work");
  }

}