import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-world',
  templateUrl: './join-world.component.html',
  styleUrls: ['./join-world.component.css']
})
export class JoinWorldComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  freelancer(){
    // put the route freelancer =>/user
    // this.router.navigateByUrl("/user");
  }
  jobs(){
     // put the route jobs =>/user
    // this.router.navigateByUrl("/user");
  }

}
