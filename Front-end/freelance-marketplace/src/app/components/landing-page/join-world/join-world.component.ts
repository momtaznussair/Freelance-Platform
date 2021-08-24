import { Component, OnInit } from '@angular/core';
import{Router}from '@angular/router'
@Component({
  selector: 'app-join-world',
  templateUrl: './join-world.component.html',
  styleUrls: ['./join-world.component.css']
})
export class JoinWorldComponent implements OnInit {

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  freelancer(){
    // put the route freelancer =>/user
    this.router.navigateByUrl("/freelancers");
  }
  jobs(){
     // put the route jobs =>/user
<<<<<<< HEAD
    this.router.navigateByUrl("/freelancer/work/filter-jobs");
=======
    this.router.navigateByUrl("freelancer/work");
>>>>>>> b0581348d7c38f224886b6ba0e47f64cabb2ce79
  }

}
