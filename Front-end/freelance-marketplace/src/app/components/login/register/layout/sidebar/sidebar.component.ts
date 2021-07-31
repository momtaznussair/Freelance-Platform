import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  currentPath : string = ''

  ngOnInit(): void {
  this.currentPath = window.location.href.substring(22);
  console.log(this.currentPath = window.location.href.substring(21))
  }


  groups : any = [
    {name : "Category" , shape : "user" , path : "/user/signup/category"},
    {name : "expertise" , shape : "badger-honey" , path : "/user/signup/expertise"},
    {name : "expertise level" , shape : "lock" , path : "/user/signup/expertise-level"},
    {name : "Education" , shape : "badge" , path : "/user/signup/education"},
    {name : "Language" , shape : "group" , path : "/user/signup/lang"},
    {name : "Hourly rate" , shape : "group" , path : "/user/signup/hourly-rate"},
    {name : "Location" , shape : "calculator" , path : "/user/signup/location"},
  ];



}
